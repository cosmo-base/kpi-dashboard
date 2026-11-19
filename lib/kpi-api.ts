// KPI ダッシュボードの GAS（gas/Code.gs。リポジトリには置かない）との通信。
// 各ページの CSV は、公開 URL を直接読まず、GAS に「この表をください」と頼んで受け取る。
// GAS は Google ログインの ID トークンを確かめ、FSIF の Access Manager で使える人にだけ返す。
import { expireToken, getIdToken } from './google-auth'

export const API_URL = process.env.NEXT_PUBLIC_KPI_GAS_URL ?? ''

const SOURCE_PREFIX = 'kpi:'
const CACHE_MS = 60 * 1000

export class ApiError extends Error {
  code?: string
  constructor(message: string, code?: string) {
    super(message)
    this.code = code
  }
}

export async function api<T = any>(action: string, payload: Record<string, unknown> = {}): Promise<T> {
  if (!API_URL) throw new ApiError('GAS の URL（NEXT_PUBLIC_KPI_GAS_URL）が設定されていません', 'NOT_CONFIGURED')
  let res: Response
  try {
    // Content-Type を付けない（text/plain）ことで CORS のプリフライトを回避する
    res = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ action, idToken: getIdToken() || '', payload }),
      redirect: 'follow',
    })
  } catch {
    throw new ApiError('サーバーに接続できませんでした。通信状況を確認してください', 'NETWORK')
  }
  let data: any
  try {
    data = await res.json()
  } catch {
    throw new ApiError(`サーバーの応答を読み取れませんでした (${res.status})`, 'BAD_RESPONSE')
  }
  if (!data?.ok) {
    // AUTH：トークンの期限切れなど。ログイン画面に戻す
    if (data?.code === 'AUTH') expireToken()
    throw new ApiError(data?.error || 'エラーが発生しました', data?.code)
  }
  return data.data as T
}

/**
 * データの名前（GitHub Secrets の NEXT_PUBLIC_KPI_◯◯_CSV_URL の ◯◯ の部分。例：'SNS'）。
 * ページはこれを kpiFetch に渡す（URL は画面に埋め込まない）。
 */
export function kpiSource(name: string) {
  return SOURCE_PREFIX + name
}

const cache = new Map<string, { at: number; text: Promise<string> }>()

/** 同じ表を続けて開いたときは1分間は取り直さない（複数のページが同じ表を読むため） */
function loadCsv(name: string): Promise<string> {
  const hit = cache.get(name)
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.text
  const text = api<{ text: string }>('csv', { name }).then((d) => d.text)
  cache.set(name, { at: Date.now(), text })
  text.catch(() => cache.delete(name))
  return text
}

/** ヘッダーの「更新」で最新を読み直すとき */
export function clearCsvCache() {
  cache.clear()
}

/**
 * fetch の代わり。kpiSource の名前なら GAS から CSV を受け取り、それ以外は普通の fetch。
 * 各ページは `.then((res) => res.text())` のまま使える。
 */
export async function kpiFetch(source: string): Promise<{ ok: boolean; text: () => Promise<string> }> {
  if (!source.startsWith(SOURCE_PREFIX)) return fetch(source)
  const text = await loadCsv(source.slice(SOURCE_PREFIX.length))
  return { ok: true, text: async () => text }
}
