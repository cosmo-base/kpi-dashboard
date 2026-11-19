// Google ログイン（Google Identity Services）。ID トークンを GAS に送り、GAS が検証して
// FSIF の Access Manager で「KPI ダッシュボードを使えるか」を確かめる（画面側では判断しない）。
// - ID トークン（約1時間で失効）はこのタブの sessionStorage にだけ置く（タブを閉じれば消える）
// - 失効の少し前に Google の自動ログイン（prompt）で取り直す。一度ログインしたブラウザならボタンは要らない
// - ログアウトしたら自動ログインを止める（disableAutoSelect）

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''

const STORAGE_KEY = 'kpi-dashboard-id-token'
const GIS_SRC = 'https://accounts.google.com/gsi/client'
const RENEW_BEFORE_MS = 5 * 60 * 1000
const MIN_REMAINING_MS = 60 * 1000

type Gis = {
  initialize: (o: Record<string, unknown>) => void
  prompt: () => void
  renderButton: (el: HTMLElement, o: Record<string, unknown>) => void
  disableAutoSelect: () => void
}
const gis = (): Gis | undefined => (window as unknown as { google?: { accounts?: { id?: Gis } } }).google?.accounts?.id

/** JWT の中身（期限の確認用。検証は GAS が行う） */
function expiresAt(token: string): number {
  try {
    const part = token.split('.')[1] ?? ''
    const json = atob(part.replace(/-/g, '+').replace(/_/g, '/'))
    return Number(JSON.parse(json).exp) * 1000 || 0
  } catch {
    return 0
  }
}

function readStored(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeStored(token: string | null) {
  try {
    if (token) sessionStorage.setItem(STORAGE_KEY, token)
    else sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    /* 保存できない環境では、開き直すたびにログインする */
  }
}

function loadGis(): Promise<void> {
  if (gis()) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = GIS_SRC
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Google ログインを読み込めませんでした。通信状況を確認してください'))
    document.head.appendChild(s)
  })
}

let token: string | null = null
let renewTimer: ReturnType<typeof setTimeout> | undefined
let expiryTimer: ReturnType<typeof setTimeout> | undefined
let buttonEl: HTMLElement | null = null
let ready = false
let started: Promise<void> | null = null
const listeners = new Set<(t: string | null) => void>()

function set(next: string | null) {
  token = next
  writeStored(next)
  clearTimeout(renewTimer)
  clearTimeout(expiryTimer)
  const exp = next ? expiresAt(next) : 0
  if (exp) {
    renewTimer = setTimeout(() => gis()?.prompt(), Math.max(0, exp - Date.now() - RENEW_BEFORE_MS))
    expiryTimer = setTimeout(() => set(null), Math.max(0, exp - Date.now()))
  }
  listeners.forEach((fn) => fn(next))
}

function renderButton() {
  const id = gis()
  if (!buttonEl || !ready || !id) return
  id.renderButton(buttonEl, { type: 'standard', theme: 'outline', size: 'large', text: 'signin_with', shape: 'pill', locale: 'ja', width: 280 })
}

export function getIdToken() {
  return token
}

/** トークンが変わるたびに呼ばれる（ログイン・取り直し・失効・ログアウト）。戻り値で解除 */
export function onTokenChange(fn: (t: string | null) => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

/** 開いたとき：保存済みのトークンがまだ十分に有効なら使い、なければ自動ログインを試す */
export function startGoogleAuth(): Promise<void> {
  if (started) return started
  started = (async () => {
    const stored = readStored()
    if (stored && expiresAt(stored) - Date.now() > MIN_REMAINING_MS) set(stored)
    else writeStored(null)
    if (!GOOGLE_CLIENT_ID) throw new Error('Google ログインのクライアントID（NEXT_PUBLIC_GOOGLE_CLIENT_ID）が設定されていません')
    await loadGis()
    gis()!.initialize({
      client_id: GOOGLE_CLIENT_ID,
      auto_select: true,
      use_fedcm_for_prompt: true,
      callback: ({ credential }: { credential: string }) => set(credential),
    })
    ready = true
    renderButton()
    if (!token) gis()!.prompt()
  })()
  started.catch(() => {
    started = null
  })
  return started
}

/** ログインボタンを描く要素（ログイン画面が渡す） */
export function mountGoogleButton(el: HTMLElement | null) {
  buttonEl = el
  renderButton()
}

export function signOut() {
  gis()?.disableAutoSelect()
  set(null)
}

/** GAS がトークンを受け付けなかったとき（期限切れなど）。ボタンからログインし直してもらう */
export function expireToken() {
  set(null)
}
