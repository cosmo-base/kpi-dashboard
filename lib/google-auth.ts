// ログイン。Google でログインする（またはポータルから引き継ぐ）と、GAS が7日もつセッションを出す。
// - セッションはこのブラウザの localStorage に置く（タブを閉じても、別のタブでもログインしたまま）
// - ポータルの「開く」から来たときは、URL の #fsif_ticket=…（引換券）でログインする（Google の画面は出ない）
// - 使えるかどうかは、GAS が毎回 FSIF の Access Manager に確かめる（役割を外せば最大5分で使えなくなる。画面側では判断しない）
// - ログアウトしたら自動ログインを止める（disableAutoSelect）。ポータルのログアウトとは別
// 古い GAS（startSession が無い）のときは、以前と同じく Google の ID トークン（約1時間）をそのまま使う。

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''

const STORAGE_KEY = 'kpi-dashboard-session'
const TICKET_PARAM = 'fsif_ticket'
const GIS_SRC = 'https://accounts.google.com/gsi/client'
const MIN_REMAINING_MS = 60 * 1000

/** GAS に送るログインの情報：{ idToken } か { ticket } */
export type Credential = { idToken: string } | { ticket: string }
/** GAS の startSession の答え（古い GAS なら null） */
export type SessionResult = { session: string; expiresAt: string } | null

type Gis = {
  initialize: (o: Record<string, unknown>) => void
  prompt: () => void
  renderButton: (el: HTMLElement, o: Record<string, unknown>) => void
  disableAutoSelect: () => void
}
const gis = (): Gis | undefined => (window as unknown as { google?: { accounts?: { id?: Gis } } }).google?.accounts?.id

/** JWT の期限（古い GAS のとき用。検証は GAS が行う） */
function jwtExpiry(token: string): number {
  try {
    const part = token.split('.')[1] ?? ''
    return Number(JSON.parse(atob(part.replace(/-/g, '+').replace(/_/g, '/'))).exp) * 1000 || 0
  } catch {
    return 0
  }
}

type Stored = { token: string; expiresAt: string }

function readStored(): Stored | null {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') as Stored | null
    return s?.token && Date.parse(s.expiresAt) - Date.now() > MIN_REMAINING_MS ? s : null
  } catch {
    return null
  }
}

function writeStored(s: Stored | null) {
  try {
    if (s) localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* 保存できない環境では、開き直すたびにログインする */
  }
}

/** URL の #fsif_ticket=…（ポータルからの引換券）を取り出し、URL からは消す */
function takeTicket(): string {
  try {
    const hash = new URLSearchParams(location.hash.replace(/^#/, ''))
    const ticket = hash.get(TICKET_PARAM)
    if (!ticket) return ''
    hash.delete(TICKET_PARAM)
    const rest = hash.toString()
    history.replaceState(null, '', location.pathname + location.search + (rest ? '#' + rest : ''))
    return ticket
  } catch {
    return ''
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
let expiryTimer: ReturnType<typeof setTimeout> | undefined
let buttonEl: HTMLElement | null = null
let ready = false
let started: Promise<void> | null = null
const listeners = new Set<(t: string | null) => void>()

function set(next: Stored | null) {
  token = next ? next.token : null
  writeStored(next)
  clearTimeout(expiryTimer)
  if (next) expiryTimer = setTimeout(() => set(null), Math.min(Math.max(0, Date.parse(next.expiresAt) - Date.now()), 2_000_000_000))
  listeners.forEach((fn) => fn(token))
}

function renderButton() {
  const id = gis()
  if (!buttonEl || !ready || !id) return
  id.renderButton(buttonEl, { type: 'standard', theme: 'outline', size: 'large', text: 'signin_with', shape: 'pill', locale: 'ja', width: 280 })
}

/** いまのログイン（GAS のセッション。古い GAS なら Google の ID トークン） */
export function getToken() {
  return token
}

/** GAS に送る欄：セッションなら { session }、古い GAS 向けの ID トークンなら { idToken } */
export function credentialField(): Record<string, string> {
  if (!token) return {}
  return token.startsWith('s1.') ? { session: token } : { idToken: token }
}

/** ログイン状態が変わるたびに呼ばれる（ログイン・失効・ログアウト）。戻り値で解除 */
export function onTokenChange(fn: (t: string | null) => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

/**
 * 開いたとき：ポータルからの引換券 → 保存済みのセッション → Google の自動ログイン の順に試す。
 * startSession：GAS にセッションを頼む。onError：ログインを始められなかったとき（使えないアカウントなど）
 */
export function startGoogleAuth(startSession: (cred: Credential) => Promise<SessionResult>, onError: (e: Error & { code?: string }) => void): Promise<void> {
  if (started) return started
  const begin = async (cred: Credential) => {
    try {
      const r = await startSession(cred)
      if (r?.session) return set({ token: r.session, expiresAt: r.expiresAt })
      // 古い GAS：ID トークンをそのまま使う（約1時間）
      if ('idToken' in cred) set({ token: cred.idToken, expiresAt: new Date(jwtExpiry(cred.idToken) || Date.now() + 3600_000).toISOString() })
    } catch (e) {
      const err = e as Error & { code?: string }
      if (err.code === 'NOT_ALLOWED') gis()?.disableAutoSelect()
      // 引換券がだめでも、ふつうのログインで入れる。使えないアカウントのときだけ知らせる
      if ('idToken' in cred || err.code === 'NOT_ALLOWED') onError(err)
    }
  }
  started = (async () => {
    const ticket = takeTicket()
    if (ticket) await begin({ ticket })
    if (!token) {
      const stored = readStored()
      if (stored) set(stored)
    }
    if (!GOOGLE_CLIENT_ID) throw new Error('Google ログインのクライアントID（NEXT_PUBLIC_GOOGLE_CLIENT_ID）が設定されていません')
    await loadGis()
    gis()!.initialize({
      client_id: GOOGLE_CLIENT_ID,
      auto_select: true,
      use_fedcm_for_prompt: true,
      callback: ({ credential }: { credential: string }) => void begin({ idToken: credential }),
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

/** GAS がセッションを受け付けなかったとき（期限切れなど）。ボタンからログインし直してもらう */
export function expireToken() {
  set(null)
}
