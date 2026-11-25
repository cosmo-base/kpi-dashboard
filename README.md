# Cosmo Base KPI Dashboard

Cosmo Base の KPI ダッシュボード（https://cosmo-base.github.io/kpi-dashboard/ ）。Next.js を静的エクスポートして GitHub Pages で公開しています。

## しくみ

```
画面（GitHub Pages・Google でログイン） ──ID トークン付きで「この表をください」──> KPI の GAS ──> 各スプレッドシートの CSV
                                                                              └──> FSIF Access Manager（使えるか）
GitHub Actions（デプロイのたび） ──Secrets の CSV の URL──> KPI の GAS
```

- ログインすると GAS（`startSession`）が7日もつセッション（`FsifSession.gs`。秘密はスクリプトプロパティ `SESSION_SECRET`、自動で作る）を返し、画面は localStorage に置く（再読み込み・別のタブでもログインしたまま）。ポータルの「開く」から来たときは引換券（`#fsif_ticket=…`）で Google の画面を出さずに入る
- ログインは FSIF Portal と同じ Google アカウント。使える人は FSIF の Access Manager（ポータルの `/access/`）で KPI ダッシュボードの役割が付いている人（役割の種類は問わない。全タブを見られる）
- 画面には CSV の URL を埋め込まない。各ページは `kpiFetch(kpiSource("SNS"))` のように名前で頼み、GAS がログインした人にだけ CSV を返す（`lib/kpi-api.ts`）
- CSV の URL はこれまでどおり GitHub Secrets の `NEXT_PUBLIC_KPI_◯◯_CSV_URL` で管理する。デプロイのたびに `scripts/sync-sources.mjs` が GAS に送る（◯◯ の部分がデータの名前）
- GAS のコードはリポジトリに置かない（`gas/` は git 管理外）

## セットアップ

### 1. GAS

1. https://script.google.com で新しいプロジェクトを作り、KPI の GAS のコード（`Code.gs` と `FsifSession.gs`）を貼る
2. プロジェクトの設定 → スクリプト プロパティに追加

   | プロパティ | 値 |
   | --- | --- |
   | `GOOGLE_CLIENT_ID` | Google ログインのクライアントID（FSIF Portal と同じ） |
   | `ACCESS_GAS_URL` | Access Manager の GAS の URL（…/exec） |
   | `ACCESS_TOOL_ID` / `ACCESS_TOOL_KEY` | Access Manager の GAS の `issueToolKeys` で出た KPI ダッシュボードのツールIDとキー |
   | `SYNC_KEY` | 長いランダムな文字列（GitHub の Secrets の `KPI_SYNC_KEY` と同じ値） |

3. エディタで `setupCheck` を実行して権限を承認する
4. デプロイ → 新しいデプロイ → ウェブアプリ（実行ユーザー「自分」、アクセス「全員」）。URL（末尾 `/exec`）を控える

### 2. Access Manager

1. Google Cloud Console のポータルの OAuth クライアントの「承認済みの JavaScript 生成元」に `https://cosmo-base.github.io` を追加
2. ポータルの Access Manager の「ツール・同期」で KPI ダッシュボードを取り込み、役割を決めて（例：ひな形「利用者／管理者」）連携状態を「連携済み」にする
3. 使う人に役割を付ける（付け外しは最大5分で反映）
4. GAS エディタで `testAccessLink`（メールアドレスを書き換えて）を実行し、`"allowed":true` が出ることを確かめる

### 3. GitHub

Settings → Secrets and variables → Actions に追加

- Variables：`KPI_GAS_URL`（1 で控えた URL）、`GOOGLE_CLIENT_ID`（ポータルと同じ）
- Secrets：`KPI_SYNC_KEY`（GAS の `SYNC_KEY` と同じ値）。CSV の `NEXT_PUBLIC_KPI_◯◯_CSV_URL` はこれまでのまま

main に push すると、CSV の URL を GAS に送ってからビルド・公開する。届いた CSV は GAS エディタの `testSources` で一度に読んで確かめられる。

### CSV を足すとき

1. GitHub の Secrets に `NEXT_PUBLIC_KPI_◯◯_CSV_URL` を追加（◯◯ は英大文字・数字・`_`）
2. `.github/workflows/nextjs.yml` の「Send CSV sources to GAS」の `env` に同じ名前を足す
3. ページで `kpiFetch(kpiSource("◯◯")).then((res) => res.text())`

### 「ウェブに公開」をやめたいとき

Secrets の URL を、スプレッドシートの編集 URL（`https://docs.google.com/spreadsheets/d/<ID>/edit?gid=<gid>`）に差し替えると、GAS が所有者の権限でシートを直接読む（GAS の所有者がそのスプレッドシートを見られること）。そのあと「ウェブに公開」を止めればよい。

## ローカルで動かす

```bash
cp .env.example .env.local   # NEXT_PUBLIC_KPI_GAS_URL・NEXT_PUBLIC_GOOGLE_CLIENT_ID を設定
npm ci --legacy-peer-deps
npm run dev
```

ローカルでログインするには、OAuth クライアントの「承認済みの JavaScript 生成元」に `http://localhost:3000` を足す。
