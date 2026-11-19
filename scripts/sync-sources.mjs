// GitHub Secrets の NEXT_PUBLIC_KPI_◯◯_CSV_URL を、KPI ダッシュボードの GAS に送る（デプロイのたびに実行）。
// 画面には CSV の URL を埋め込まず、GAS がログインした人にだけ CSV を返す。
// 必要な環境変数：KPI_GAS_URL（GAS の …/exec）、KPI_SYNC_KEY（GAS の SYNC_KEY と同じ値）
const url = process.env.KPI_GAS_URL
const key = process.env.KPI_SYNC_KEY
if (!url || !key) {
  console.error('::error::リポジトリの Variables に KPI_GAS_URL、Secrets に KPI_SYNC_KEY を設定してください')
  process.exit(1)
}

const sources = {}
for (const [name, value] of Object.entries(process.env)) {
  const m = name.match(/^NEXT_PUBLIC_KPI_(.+)_CSV_URL$/)
  if (m && value) sources[m[1]] = value.trim()
}

const res = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'text/plain;charset=utf-8' },
  body: JSON.stringify({ action: 'setSources', payload: { key, sources } }),
  redirect: 'follow',
})
let body
try {
  body = await res.json()
} catch {
  console.error(`::error::GAS の応答を読めませんでした（HTTP ${res.status}）。KPI_GAS_URL がウェブアプリの URL（末尾 /exec）か確認してください`)
  process.exit(1)
}
if (!body.ok) {
  console.error(`::error::GAS に CSV の URL を送れませんでした：${body.error}`)
  process.exit(1)
}
console.log(`GAS に CSV の URL を送りました（${body.data.names.length}件）：${body.data.names.join(', ')}`)
if (body.data.skipped.length) console.log(`::warning::形式が正しくないため送らなかったもの：${body.data.skipped.join(', ')}`)
