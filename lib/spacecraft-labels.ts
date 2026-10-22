// このファイルは宇宙機プロジェクトシミュレーターの scripts/export-labels.ts で自動生成しています。手で編集しないでください。
// 生成元のバージョン: 0.4.0

export const SPACECRAFT_LABELS = {
  "appVersion": "0.4.0",
  "phases": [
    "ミッション構想",
    "目標設定",
    "機体構成",
    "資金調達",
    "チーム形成",
    "詳細設計",
    "製造・統合",
    "試験・審査",
    "打ち上げ・初期運用",
    "定常運用・終了"
  ],
  "endings": {
    "success": "ミッション達成",
    "extended": "延命運用",
    "partial": "部分達成",
    "lesson": "技術的な挑戦からの学び",
    "early": "早期終了"
  },
  "risks": {
    "grant": "助成金の審査",
    "crowdfunding": "支援の募集",
    "emergencyFunding": "追加支援のお願い",
    "vibration": "振動試験",
    "contact": "最初の通信",
    "recoverIsolate": "原因の切り分け",
    "recoverProcedure": "復旧手順",
    "recoverLast": "呼びかけ",
    "deploy": "パネルの展開",
    "payloadHang": "機器の不具合",
    "reset": "リセット",
    "extended": "延長運用",
    "safetyReview": "安全審査",
    "debrisPass": "デブリの通過",
    "grantRetry": "再申請の審査",
    "testFind": "試験中の異常",
    "launchDelay": "打ち上げ延期",
    "tumble": "機体の回転",
    "solarStorm": "太陽フレア",
    "conjunction": "デブリの接近",
    "groundFault": "地上局のトラブル",
    "partShortage": "部品の値上がり"
  },
  "values": {
    "budget": "資金",
    "months": "打ち上げまでの余裕",
    "reliability": "信頼性",
    "mission": "ミッション価値",
    "team": "チーム状態",
    "trust": "社会的信頼",
    "progress": "ミッション達成度",
    "massMargin": "質量マージン",
    "powerMargin": "電力マージン",
    "thermalMargin": "熱余裕",
    "linkMargin": "通信余裕",
    "coverage": "検証カバレッジ",
    "issues": "未解決不具合",
    "opsLoad": "運用負荷"
  },
  "flags": {
    "budgetWarned": "資金が足りなくなってきた：支援者・スポンサーに追加支援をお願いする",
    "downsized": "資金が足りなくなってきた：計画を縮小して費用を抑える",
    "budgetFinal": "まだ資金が足りない：観測機能を大きく絞って続ける",
    "missionEarth": "何を宇宙から見てみたい？：地球の環境（森林・海・雲）",
    "missionNight": "何を宇宙から見てみたい？：夜の街の明かり",
    "missionWeather": "何を宇宙から見てみたい？：宇宙天気（太陽の活動と放射線）",
    "pitch": "このミッション、ひとことで言うと？：ひとことで伝わるキャッチコピーを考える",
    "docs": "このミッション、ひとことで言うと？：くわしい説明資料をつくる",
    "orbitSso": "どの軌道を回る？：太陽同期軌道（毎日同じ時刻に同じ場所の上空を通る）",
    "orbitIss": "どの軌道を回る？：国際宇宙ステーションから放出してもらう",
    "orbitHigh": "どの軌道を回る？：少し高めの軌道に相乗りする",
    "partnerLab": "誰と一緒に始める？：大学の研究室と組む",
    "partnerFactory": "誰と一緒に始める？：地元の町工場と組む",
    "openTeam": "誰と一緒に始める？：SNSで仲間を広く募る",
    "tieredGoals": "成功の条件を決めよう：段階的に決める（最低限・標準・挑戦）",
    "clearGoal": "成功の条件を決めよう：段階的に決める（最低限・標準・挑戦）",
    "ambitious": "成功の条件を決めよう：できるだけ大きな目標を掲げる",
    "userResearch": "データを誰に届けたい？：研究者に使ってもらう",
    "userSchool": "データを誰に届けたい？：学校の授業で使ってもらう",
    "userPublic": "データを誰に届けたい？：だれでも見られるように公開する",
    "longMission": "運用期間はどれくらいにする？：2年",
    "budgetPlan": "お金の流れを見てみよう：費用の一覧表をつくる",
    "grant": "助成金の公募が始まった：申請する（成功）",
    "grantRejected": "助成金の公募が始まった：申請する（失敗）",
    "sponsor": "企業からスポンサーの申し出：資金援助として受ける",
    "sponsorParts": "企業からスポンサーの申し出：部品や試験設備の提供として受ける",
    "crowdSupport": "支援者を広く募ってみる？：支援を募る（成功）",
    "expertHelp": "人手が足りない：経験者に外部協力をお願いする",
    "groundCommercial": "地上局ってなに？：商用の地上局サービスを契約する",
    "roles": "意見がまとまらない：担当と決め方のルールを決める",
    "mentorAdvice": "先輩チームに話を聞いてみる？：話を聞きに行く",
    "fullShift": "運用体制の設計：初期運用は全パス有人対応",
    "hiyari": "「ヒヤッ」とした話を共有する：気軽に報告できる仕組みをつくる",
    "delegated": "責任者のあなたも疲れている：信頼できる仲間に仕事を任せる",
    "sysEng": "全体を見渡す役割：全体を見る担当を決める",
    "configMgmt": "構成管理の方法：構成管理ツールと変更審査を導入",
    "altPart": "部品の納期が遅れている：代わりの部品を探す",
    "radSpace": "放射線対策と部品選定：宇宙用（耐放射線）部品を採用",
    "radCots": "放射線対策と部品選定：民生品をそのまま使う",
    "redundancy": "もしものための予備をつける？：搭載計算機を二重にする",
    "frequencyOk": "電波の手続きが間に合わない？：専門家に頼んで急いで手続きする",
    "prEvent": "科学館のイベントに出てみない？：参加する",
    "namePlate": "支援者へのお礼：名前を刻んだ小さなプレートを載せる",
    "hils": "フライトソフトの統合試験環境：HILS環境を構築して検証",
    "postLaunchSw": "ソフトウェアの完成が遅れている：最低限の機能で打ち上げ、後から更新する",
    "vibrationFull": "振動試験：本番と同じ条件でしっかり試験する",
    "vibrationLite": "振動試験：条件をゆるめて短時間で試験する",
    "thermalVacFull": "熱真空試験：温度サイクルを何度も繰り返して試験する",
    "deployTested": "展開物の試験：温度を変えながら何度も繰り返す",
    "unresolvedReset": "試験中に原因不明のリセット：再現しないので記録して様子を見る",
    "e2eTest": "地上局とつないで通信試験：本番の地上局とつないで確かめる",
    "opsRehearsal": "運用リハーサル：リハーサルを行い、復旧手順も用意する",
    "safetyOk": "打ち上げ事業者の安全審査：時間をかけて書類を準備する",
    "finalCheck": "打ち上げ前の最終チェック：時間をかけて確認する",
    "delayReview": "打ち上げが延期に：待っている間に運用手順を見直す",
    "contactOk": "打ち上げ！：最初の通信を試みる（成功）",
    "noContact": "打ち上げ！：最初の通信を試みる（失敗）",
    "contactLost": "衛星から返事がない！：原因を一つずつ切り分ける（失敗）",
    "panelPartial": "太陽電池パネルを広げる：展開コマンドを送る（失敗）",
    "teleWatch": "衛星の「健康診断」を見てみよう：グラフを毎日チェックする係を決める",
    "schoolContact": "授業で衛星とつながる日：学校にアンテナを持って行く",
    "viral": "宇宙からの写真が話題に：撮影リクエストを募集する",
    "stormData": "大きな太陽フレアが発生：これこそ観測のチャンス！観測を続ける",
    "batteryCare": "バッテリーが年をとってきた：電気を使いすぎない運用に変える",
    "lessonsDoc": "次の衛星の話：ここまでの学びを資料にまとめ始める",
    "extended": "運用期間の終わり：延長して運用を続ける（成功）",
    "deorbit": "運用期間の終わり：計画どおりに運用を終える",
    "nameContest": "衛星に名前をつけよう：名前を広く募集する",
    "conops": "運用コンセプト（ConOps）の策定：ConOpsを先に作る",
    "powerPlan": "電気の余裕、足りている？：機器を順番に使う計画を立てておく",
    "factoryNetwork": "町工場の仲間たちからの提案：地域の工場と一緒につくる",
    "labFacility": "研究室の試験設備を予約する？：今のうちに予約しておく",
    "media": "新聞社から取材の依頼：取材を受ける",
    "otaCapable": "衛星のソフトウェアをどうつくる？：宇宙でも書き換えられるようにする",
    "fmea": "FMEA（故障モード影響解析）：全サブシステムでFMEAを実施",
    "deorbitDevice": "運用が終わった後のこと：軌道離脱を早める装置を載せる",
    "rivalCoop": "似たミッションの先輩がいた：連絡して、経験を教えてもらう",
    "launchBooked": "ロケットの席を確保する：今のうちに予約する",
    "launchLate": "ロケットの席を確保する：機体の目処が立ってから探す",
    "kidsLogo": "ミッションのロゴをつくろう：子どもたちに絵を描いてもらう",
    "dataPolicy": "データの使い方のルール：公開とクレジット表記のルールを決める",
    "techDemo": "新しい技術にも挑戦する？：新しい技術の実証も載せる",
    "milestones": "打ち上げ日から逆算する：節目ごとに確認の日を決める",
    "reqTrace": "要求のトレーサビリティ：要求―検証マトリクスを作成",
    "reserve": "マネジメントリザーブの設定：予備費を確保する",
    "localGov": "町からの応援：一緒に取り組む",
    "antennaDeploy": "アンテナを広げる？：打ち上げ後に広げるアンテナにする",
    "cotsBattery": "バッテリーの選び方：民生品を選び、自分たちで試験する",
    "gps": "衛星はどうやって自分の位置を知る？：GPS受信機を載せる",
    "nextSat": "「この機能も追加できない？」：「次の衛星で」と約束する",
    "hamHelp": "地上局のアンテナが動かない：他の地上局に助けを求める",
    "hamNetwork": "世界中から受信報告が届く：受信報告を広く募る"
  },
  "subsystems": [
    {
      "id": "power",
      "name": "電源",
      "options": {
        "body": "ボディ実装の太陽電池",
        "deploy": "展開式太陽電池パネル",
        "deployBattery": "展開式パネル＋大容量バッテリー"
      }
    },
    {
      "id": "comm",
      "name": "通信",
      "options": {
        "uhf": "UHF帯無線機",
        "sband": "S帯通信機",
        "xband": "X帯高速通信機"
      }
    },
    {
      "id": "adcs",
      "name": "姿勢制御",
      "options": {
        "magnet": "磁気トルカのみ",
        "wheel": "リアクションホイール",
        "wheelTracker": "ホイール＋スタートラッカ"
      }
    },
    {
      "id": "thermal",
      "name": "熱制御",
      "options": {
        "passive": "パッシブ熱制御",
        "heater": "ヒーター付き熱制御"
      }
    },
    {
      "id": "payload",
      "name": "観測機器",
      "options": {
        "small": "小型カメラ",
        "standard": "高性能カメラ",
        "large": "大型観測装置"
      }
    }
  ],
  "events": {
    "g-budget-1": {
      "title": "資金が足りなくなってきた",
      "phase": "any",
      "mode": "common",
      "kind": "随時",
      "order": 0,
      "choices": {
        "ask": "支援者・スポンサーに追加支援をお願いする",
        "downsize": "計画を縮小して費用を抑える"
      }
    },
    "g-budget-2": {
      "title": "まだ資金が足りない",
      "phase": "any",
      "mode": "common",
      "kind": "随時",
      "order": 1,
      "choices": {
        "downsize": "観測機能を大きく絞って続ける",
        "close": "ここで区切りをつけ、成果をまとめる"
      }
    },
    "g-budget-3": {
      "title": "プロジェクトの区切り",
      "phase": "any",
      "mode": "common",
      "kind": "随時",
      "order": 2,
      "choices": {
        "close": "ここで区切りをつけ、成果をまとめる"
      }
    },
    "b-intro": {
      "title": "ようこそ、プロジェクト責任者さん",
      "phase": "concept",
      "mode": "beginner",
      "kind": "柱",
      "order": 3,
      "choices": {
        "go": "はじめる"
      }
    },
    "b-inside": {
      "title": "人工衛星の中身をのぞいてみよう",
      "phase": "concept",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 4,
      "choices": {
        "model": "模型を分解して、中身を見てみる",
        "next": "なるほど、先へ進もう"
      }
    },
    "c-mission": {
      "title": "何を宇宙から見てみたい？",
      "phase": "concept",
      "mode": "common",
      "kind": "柱",
      "order": 5,
      "choices": {
        "earth": "地球の環境（森林・海・雲）",
        "night": "夜の街の明かり",
        "weather": "宇宙天気（太陽の活動と放射線）"
      }
    },
    "c-why": {
      "title": "このミッション、ひとことで言うと？",
      "phase": "concept",
      "mode": "common",
      "kind": "ランダム",
      "order": 6,
      "choices": {
        "catch": "ひとことで伝わるキャッチコピーを考える",
        "docs": "くわしい説明資料をつくる"
      }
    },
    "c-orbit": {
      "title": "どの軌道を回る？",
      "phase": "concept",
      "mode": "common",
      "kind": "ランダム",
      "order": 7,
      "choices": {
        "sso": "太陽同期軌道（毎日同じ時刻に同じ場所の上空を通る）",
        "iss": "国際宇宙ステーションから放出してもらう",
        "high": "少し高めの軌道に相乗りする"
      }
    },
    "c-team": {
      "title": "誰と一緒に始める？",
      "phase": "concept",
      "mode": "common",
      "kind": "ランダム",
      "order": 8,
      "choices": {
        "lab": "大学の研究室と組む",
        "factory": "地元の町工場と組む",
        "open": "SNSで仲間を広く募る"
      }
    },
    "g-success": {
      "title": "成功の条件を決めよう",
      "phase": "goals",
      "mode": "common",
      "kind": "柱",
      "order": 9,
      "choices": {
        "tiered": "段階的に決める（最低限・標準・挑戦）",
        "clear": "一つの明確な目標に絞る",
        "ambitious": "できるだけ大きな目標を掲げる"
      }
    },
    "g-users": {
      "title": "データを誰に届けたい？",
      "phase": "goals",
      "mode": "common",
      "kind": "ランダム",
      "order": 10,
      "choices": {
        "research": "研究者に使ってもらう",
        "school": "学校の授業で使ってもらう",
        "public": "だれでも見られるように公開する"
      }
    },
    "g-duration": {
      "title": "運用期間はどれくらいにする？",
      "phase": "goals",
      "mode": "common",
      "kind": "ランダム",
      "order": 11,
      "choices": {
        "half": "半年",
        "year": "1年",
        "two": "2年"
      }
    },
    "b-catalog": {
      "title": "部品カタログを見てみよう",
      "phase": "design",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 12,
      "choices": {
        "proven": "実績のある部品を中心に選ぶ",
        "new": "新しい部品にも目を向ける"
      }
    },
    "d-design": {
      "title": "機体構成を決めよう",
      "phase": "design",
      "mode": "common",
      "kind": "柱",
      "order": 13,
      "choices": {}
    },
    "x-review": {
      "title": "概念設計審査（CDR前のシステムレビュー）",
      "phase": "design",
      "mode": "expert",
      "kind": "ランダム",
      "order": 14,
      "choices": {
        "rework": "指摘を反映して設計を見直す",
        "note": "指摘を記録し、詳細設計で対応する"
      }
    },
    "b-money": {
      "title": "お金の流れを見てみよう",
      "phase": "funding",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 15,
      "choices": {
        "plan": "費用の一覧表をつくる",
        "rough": "だいたいの見積もりで進める"
      }
    },
    "f-grant": {
      "title": "助成金の公募が始まった",
      "phase": "funding",
      "mode": "common",
      "kind": "柱",
      "order": 16,
      "choices": {
        "apply": "申請する",
        "skip": "今回は見送る"
      }
    },
    "f-grant-retry": {
      "title": "別の財団の助成金に再挑戦",
      "phase": "funding",
      "mode": "common",
      "kind": "伏線回収",
      "order": 17,
      "choices": {
        "apply": "コメントを反映して再申請する",
        "skip": "今回は開発に集中する"
      }
    },
    "f-sponsor": {
      "title": "企業からスポンサーの申し出",
      "phase": "funding",
      "mode": "common",
      "kind": "ランダム",
      "order": 18,
      "choices": {
        "money": "資金援助として受ける",
        "parts": "部品や試験設備の提供として受ける",
        "decline": "今回はお断りする"
      }
    },
    "f-crowd": {
      "title": "支援者を広く募ってみる？",
      "phase": "funding",
      "mode": "common",
      "kind": "ランダム",
      "order": 19,
      "choices": {
        "run": "支援を募る",
        "skip": "今は開発に集中する"
      }
    },
    "t-people": {
      "title": "人手が足りない",
      "phase": "team",
      "mode": "common",
      "kind": "ランダム",
      "order": 20,
      "choices": {
        "students": "学生メンバーを募集する",
        "expert": "経験者に外部協力をお願いする",
        "push": "今のメンバーで頑張る"
      }
    },
    "b-ground": {
      "title": "地上局ってなに？",
      "phase": "team",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 21,
      "choices": {
        "own": "研究室や仲間の無線局を使う",
        "commercial": "商用の地上局サービスを契約する"
      }
    },
    "x-ground": {
      "title": "地上局ネットワークの構成",
      "phase": "team",
      "mode": "expert",
      "kind": "ランダム",
      "order": 22,
      "choices": {
        "single": "自前の単一局で運用",
        "network": "商用地上局ネットワークと契約"
      }
    },
    "t-roles": {
      "title": "意見がまとまらない",
      "phase": "team",
      "mode": "common",
      "kind": "伏線回収",
      "order": 23,
      "choices": {
        "roles": "担当と決め方のルールを決める",
        "leader": "責任者がその場で決める"
      }
    },
    "t-mentor": {
      "title": "先輩チームに話を聞いてみる？",
      "phase": "team",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 24,
      "choices": {
        "visit": "話を聞きに行く",
        "self": "自分たちで考えて進める"
      }
    },
    "t-handover": {
      "title": "主要メンバーの転勤",
      "phase": "team",
      "mode": "common",
      "kind": "条件付き",
      "order": 25,
      "choices": {
        "docs": "引き継ぎ資料をしっかり作ってもらう",
        "quick": "新しいメンバーに任せて走りながら覚えてもらう"
      }
    },
    "x-opsteam": {
      "title": "運用体制の設計",
      "phase": "team",
      "mode": "expert",
      "kind": "ランダム",
      "order": 26,
      "choices": {
        "full": "初期運用は全パス有人対応",
        "day": "日中パスのみ有人、夜間は記録のみ"
      }
    },
    "t-hiyari": {
      "title": "「ヒヤッ」とした話を共有する",
      "phase": "team",
      "mode": "common",
      "kind": "ランダム",
      "order": 27,
      "choices": {
        "share": "気軽に報告できる仕組みをつくる",
        "self": "各自で気をつける"
      }
    },
    "t-meeting": {
      "title": "会議のやり方",
      "phase": "team",
      "mode": "common",
      "kind": "ランダム",
      "order": 28,
      "choices": {
        "daily": "毎朝10分だけ集まる",
        "weekly": "週に一度じっくり話し合う"
      }
    },
    "t-leader": {
      "title": "責任者のあなたも疲れている",
      "phase": "team",
      "mode": "common",
      "kind": "条件付き",
      "order": 29,
      "choices": {
        "delegate": "信頼できる仲間に仕事を任せる",
        "carry": "自分で抱え込んで乗り切る"
      }
    },
    "b-syseng": {
      "title": "全体を見渡す役割",
      "phase": "team",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 30,
      "choices": {
        "assign": "全体を見る担当を決める",
        "all": "みんなで全体を見るようにする"
      }
    },
    "x-config": {
      "title": "構成管理の方法",
      "phase": "team",
      "mode": "expert",
      "kind": "ランダム",
      "order": 31,
      "choices": {
        "tool": "構成管理ツールと変更審査を導入",
        "sheet": "共有スプレッドシートで管理"
      }
    },
    "t-intern": {
      "title": "高校生がインターンに来たいそうです",
      "phase": "team",
      "mode": "common",
      "kind": "伏線回収",
      "order": 32,
      "choices": {
        "accept": "受け入れる",
        "later": "打ち上げ後の見学会に招待する"
      }
    },
    "t-tired": {
      "title": "チームが疲れてきた",
      "phase": "team",
      "mode": "common",
      "kind": "条件付き",
      "order": 33,
      "choices": {
        "rest": "みんなで休みを取る",
        "push": "打ち上げまで踏ん張る"
      }
    },
    "dd-pdr": {
      "title": "設計の中間審査",
      "phase": "detail",
      "mode": "common",
      "kind": "ランダム",
      "order": 34,
      "choices": {
        "external": "外部の専門家にも見てもらう",
        "internal": "チームの中で確認する"
      }
    },
    "dd-parts": {
      "title": "部品の納期が遅れている",
      "phase": "detail",
      "mode": "common",
      "kind": "ランダム",
      "order": 35,
      "choices": {
        "wait": "予定の部品を待つ",
        "alt": "代わりの部品を探す",
        "rush": "追加費用を払って急いでもらう"
      }
    },
    "dd-altfail": {
      "title": "代わりの部品に気になる点",
      "phase": "detail",
      "mode": "common",
      "kind": "伏線回収",
      "order": 36,
      "choices": {
        "eval": "追加で試験して使える範囲を確かめる",
        "revert": "元の部品を待つことにする"
      }
    },
    "x-radiation": {
      "title": "放射線対策と部品選定",
      "phase": "detail",
      "mode": "expert",
      "kind": "ランダム",
      "order": 37,
      "choices": {
        "space": "宇宙用（耐放射線）部品を採用",
        "screen": "民生品＋スクリーニング＋保護回路",
        "cots": "民生品をそのまま使う"
      }
    },
    "dd-mass": {
      "title": "機体が重くなってきた",
      "phase": "detail",
      "mode": "common",
      "kind": "条件付き",
      "order": 38,
      "choices": {
        "lighten": "軽量化設計に取り組む",
        "cut": "一部の機能を削る",
        "keep": "このまま進める"
      }
    },
    "x-power": {
      "title": "電力収支の再評価",
      "phase": "detail",
      "mode": "expert",
      "kind": "条件付き",
      "order": 39,
      "choices": {
        "duty": "観測のデューティ比を下げる運用設計",
        "battery": "バッテリーセルを追加",
        "accept": "現状で許容する"
      }
    },
    "dd-redundancy": {
      "title": "もしものための予備をつける？",
      "phase": "detail",
      "mode": "common",
      "kind": "ランダム",
      "order": 40,
      "choices": {
        "add": "搭載計算機を二重にする",
        "none": "予備はつけず、試験で確かめる"
      }
    },
    "i-frequency": {
      "title": "電波の手続きが間に合わない？",
      "phase": "integration",
      "mode": "common",
      "kind": "条件付き",
      "order": 41,
      "choices": {
        "rush": "専門家に頼んで急いで手続きする",
        "self": "自分たちで急いで進める"
      }
    },
    "b-cleanroom": {
      "title": "どこで組み立てる？",
      "phase": "integration",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 42,
      "choices": {
        "clean": "クリーンルームを借りて組み立てる",
        "desk": "研究室の作業台で丁寧に組み立てる"
      }
    },
    "b-quiz-temp": {
      "title": "宇宙クイズ：日なたと日陰の温度差は？",
      "phase": "integration",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 43,
      "answer": "a200",
      "choices": {
        "a10": "10℃くらい",
        "a50": "50℃くらい",
        "a200": "200℃以上"
      }
    },
    "i-esd": {
      "title": "静電気に気をつけて",
      "phase": "integration",
      "mode": "common",
      "kind": "ランダム",
      "order": 44,
      "choices": {
        "strict": "静電気対策のルールを徹底する",
        "care": "気をつけて作業する"
      }
    },
    "i-interface": {
      "title": "機器同士がうまく話さない",
      "phase": "integration",
      "mode": "common",
      "kind": "ランダム",
      "order": 45,
      "choices": {
        "investigate": "じっくり原因を調べる",
        "patch": "ソフトウェアで応急的に直す"
      }
    },
    "i-pr": {
      "title": "科学館のイベントに出てみない？",
      "phase": "integration",
      "mode": "common",
      "kind": "ランダム",
      "order": 46,
      "choices": {
        "join": "参加する",
        "decline": "今回は見送る"
      }
    },
    "i-harness": {
      "title": "配線のつなぎ間違いが見つかった",
      "phase": "integration",
      "mode": "common",
      "kind": "ランダム",
      "order": 47,
      "choices": {
        "all": "全部の配線を点検し直す",
        "one": "見つかった箇所だけ直す"
      }
    },
    "i-craft": {
      "title": "職人さんのひと工夫",
      "phase": "integration",
      "mode": "common",
      "kind": "伏線回収",
      "order": 48,
      "choices": {
        "accept": "提案を取り入れる",
        "keep": "設計どおりで進める"
      }
    },
    "i-sponsor-logo": {
      "title": "スポンサーからのお願い",
      "phase": "integration",
      "mode": "common",
      "kind": "伏線回収",
      "order": 49,
      "choices": {
        "accept": "外装パネルにロゴを大きく入れる",
        "talk": "広報の写真や動画で目立たせる方法を提案する"
      }
    },
    "i-plate": {
      "title": "支援者へのお礼",
      "phase": "integration",
      "mode": "common",
      "kind": "伏線回収",
      "order": 50,
      "choices": {
        "plate": "名前を刻んだ小さなプレートを載せる",
        "report": "打ち上げ報告会を開くことにする"
      }
    },
    "x-hils": {
      "title": "フライトソフトの統合試験環境",
      "phase": "integration",
      "mode": "expert",
      "kind": "ランダム",
      "order": 51,
      "choices": {
        "hils": "HILS環境を構築して検証",
        "bench": "実機の単体動作確認のみ"
      }
    },
    "i-flatsat": {
      "title": "机の上で全部つないで動かしてみる",
      "phase": "integration",
      "mode": "common",
      "kind": "ランダム",
      "order": 52,
      "choices": {
        "do": "机の上で動かしてみる",
        "skip": "そのまま機体に組み込む"
      }
    },
    "i-sw-late": {
      "title": "ソフトウェアの完成が遅れている",
      "phase": "integration",
      "mode": "common",
      "kind": "伏線回収",
      "order": 53,
      "choices": {
        "later": "最低限の機能で打ち上げ、後から更新する",
        "wait": "完成を待ってから組み込む"
      }
    },
    "b-first-photo": {
      "title": "地上でカメラの試し撮り",
      "phase": "integration",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 54,
      "choices": {
        "roof": "屋上から町を撮ってみる",
        "test": "試験用の模様を撮って性能を確かめる"
      }
    },
    "i-photo": {
      "title": "完成した機体の記念写真",
      "phase": "integration",
      "mode": "common",
      "kind": "ランダム",
      "order": 55,
      "choices": {
        "public": "写真を公開して報告する",
        "team": "チームの思い出にしておく"
      }
    },
    "x-magnetic": {
      "title": "残留磁気の測定",
      "phase": "integration",
      "mode": "expert",
      "kind": "条件付き",
      "order": 56,
      "choices": {
        "measure": "測定して補償値を設定する",
        "skip": "測定を省略する"
      }
    },
    "i-mass-check": {
      "title": "組み上がった機体の重さを量る",
      "phase": "integration",
      "mode": "common",
      "kind": "柱",
      "order": 57,
      "choices": {
        "remove": "観測機器の一部を外して重さを合わせる"
      }
    },
    "b-why-test": {
      "title": "なぜこんなに試験をするの？",
      "phase": "testing",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 58,
      "choices": {
        "ok": "なるほど。しっかり試験しよう"
      }
    },
    "te-vibration": {
      "title": "振動試験",
      "phase": "testing",
      "mode": "common",
      "kind": "柱",
      "order": 59,
      "choices": {
        "full": "本番と同じ条件でしっかり試験する",
        "lite": "条件をゆるめて短時間で試験する",
        "skip": "試験を省略する"
      }
    },
    "te-thermal": {
      "title": "熱真空試験",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 60,
      "choices": {
        "full": "温度サイクルを何度も繰り返して試験する",
        "lite": "一度だけ確認する",
        "skip": "試験を省略する"
      }
    },
    "te-lab": {
      "title": "研究室の設備で追加の試験",
      "phase": "testing",
      "mode": "common",
      "kind": "伏線回収",
      "order": 61,
      "choices": {
        "extra": "気になる点をまとめて試験する",
        "skip": "予定の試験だけにする"
      }
    },
    "te-deploy": {
      "title": "展開物の試験",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 62,
      "choices": {
        "repeat": "温度を変えながら何度も繰り返す",
        "once": "常温で一度だけ確かめる"
      }
    },
    "x-emc": {
      "title": "EMC試験",
      "phase": "testing",
      "mode": "expert",
      "kind": "ランダム",
      "order": 63,
      "choices": {
        "fix": "フィルタ追加とハーネス再配線",
        "accept": "劣化量をリンク計算に織り込んで許容"
      }
    },
    "te-glitch": {
      "title": "試験中に原因不明のリセット",
      "phase": "testing",
      "mode": "common",
      "kind": "偶然",
      "order": 64,
      "choices": {
        "investigate": "原因がわかるまで調べる",
        "watch": "再現しないので記録して様子を見る"
      }
    },
    "te-longrun": {
      "title": "長い時間動かし続ける試験",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 65,
      "choices": {
        "two": "2週間動かし続ける",
        "day": "1日だけ動かす"
      }
    },
    "te-e2e": {
      "title": "地上局とつないで通信試験",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 66,
      "choices": {
        "do": "本番の地上局とつないで確かめる",
        "bench": "試験用の機材で確かめる"
      }
    },
    "te-rehearsal": {
      "title": "運用リハーサル",
      "phase": "testing",
      "mode": "common",
      "kind": "柱",
      "order": 67,
      "choices": {
        "do": "リハーサルを行い、復旧手順も用意する",
        "skip": "省略して機体の仕上げに集中する"
      }
    },
    "te-safety": {
      "title": "打ち上げ事業者の安全審査",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 68,
      "choices": {
        "careful": "時間をかけて書類を準備する",
        "minimum": "最低限の書類で提出してみる"
      }
    },
    "te-records": {
      "title": "試験記録の整理",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 69,
      "choices": {
        "organize": "試験記録をきちんとまとめる",
        "later": "打ち上げ後に整理する"
      }
    },
    "x-swfreeze": {
      "title": "フライトソフトの凍結",
      "phase": "testing",
      "mode": "expert",
      "kind": "ランダム",
      "order": 70,
      "choices": {
        "freeze": "予定どおり凍結する",
        "tweak": "直前まで改善を続ける"
      }
    },
    "te-final": {
      "title": "打ち上げ前の最終チェック",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 71,
      "choices": {
        "careful": "時間をかけて確認する",
        "schedule": "日程を優先する"
      }
    },
    "te-ship-review": {
      "title": "出荷前の最終審査",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 72,
      "choices": {
        "external": "外部の専門家も招いて審査する",
        "internal": "チームの中で確認する"
      }
    },
    "te-ship": {
      "title": "衛星を打ち上げ場所へ運ぶ",
      "phase": "testing",
      "mode": "common",
      "kind": "ランダム",
      "order": 73,
      "choices": {
        "container": "専用の輸送コンテナを使う",
        "hand": "メンバーが手荷物で大切に運ぶ"
      }
    },
    "te-slot": {
      "title": "乗れるロケットが見つからない",
      "phase": "testing",
      "mode": "common",
      "kind": "伏線回収",
      "order": 74,
      "choices": {
        "abroad": "海外のロケットに切り替える",
        "wait": "次に空く席を待つ"
      }
    },
    "te-slip": {
      "title": "打ち上げに間に合わない",
      "phase": "testing",
      "mode": "common",
      "kind": "柱",
      "order": 75,
      "choices": {
        "rebook": "次の打ち上げ機会を予約し直す",
        "ship": "残りの作業を省いて引き渡す"
      }
    },
    "l-delay": {
      "title": "打ち上げが延期に",
      "phase": "launch",
      "mode": "common",
      "kind": "偶然",
      "order": 76,
      "choices": {
        "check": "待っている間に運用手順を見直す",
        "rest": "しっかり休んで本番に備える"
      }
    },
    "b-countdown": {
      "title": "打ち上げをどこで見守る？",
      "phase": "launch",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 77,
      "choices": {
        "site": "発射場まで行って、自分の目で見る",
        "room": "管制室で中継を見ながら備える"
      }
    },
    "l-launch": {
      "title": "打ち上げ！",
      "phase": "launch",
      "mode": "common",
      "kind": "柱",
      "order": 78,
      "choices": {
        "contact": "最初の通信を試みる"
      }
    },
    "l-nocontact": {
      "title": "衛星から返事がない！",
      "phase": "launch",
      "mode": "common",
      "kind": "柱",
      "order": 79,
      "choices": {
        "isolate": "原因を一つずつ切り分ける",
        "procedure": "事前に用意した手順に沿って復旧を試みる"
      }
    },
    "l-lost": {
      "title": "もう一度だけ",
      "phase": "launch",
      "mode": "common",
      "kind": "柱",
      "order": 80,
      "choices": {
        "wait": "数週間、毎日呼びかけ続ける",
        "stop": "ここで運用を終え、原因を振り返る"
      }
    },
    "l-tumble": {
      "title": "衛星がくるくる回っている",
      "phase": "launch",
      "mode": "common",
      "kind": "偶然",
      "order": 81,
      "choices": {
        "wait": "自動で回転を止める機能に任せて待つ",
        "tune": "制御の設定を調整して早く止める"
      }
    },
    "l-deploy": {
      "title": "太陽電池パネルを広げる",
      "phase": "launch",
      "mode": "common",
      "kind": "柱",
      "order": 82,
      "choices": {
        "deploy": "展開コマンドを送る"
      }
    },
    "l-cheer": {
      "title": "応援してくれた人たちへ",
      "phase": "launch",
      "mode": "common",
      "kind": "伏線回収",
      "order": 83,
      "choices": {
        "live": "受信した電波の音を公開する",
        "later": "機器の確認が終わってから報告する"
      }
    },
    "l-checkout": {
      "title": "機器を順番に確かめる",
      "phase": "launch",
      "mode": "common",
      "kind": "伏線回収",
      "order": 84,
      "choices": {
        "careful": "じっくり時間をかけて確かめる",
        "quick": "早く観測を始めたいので手短に"
      }
    },
    "o-first": {
      "title": "初めての観測データ",
      "phase": "operations",
      "mode": "common",
      "kind": "柱",
      "order": 85,
      "choices": {
        "share": "すぐに支援者にも共有する",
        "analyze": "まずはしっかり解析する"
      }
    },
    "b-telemetry": {
      "title": "衛星の「健康診断」を見てみよう",
      "phase": "operations",
      "mode": "beginner",
      "kind": "伏線回収",
      "order": 86,
      "choices": {
        "watch": "グラフを毎日チェックする係を決める",
        "auto": "異常なときだけ知らせてもらう"
      }
    },
    "b-quiz-orbit": {
      "title": "宇宙クイズ：地球を一周するのにかかる時間は？",
      "phase": "operations",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 87,
      "answer": "a90",
      "choices": {
        "a90": "約90分",
        "a1d": "約1日",
        "a1w": "約1週間"
      }
    },
    "b-look-up": {
      "title": "衛星を空に探してみよう",
      "phase": "operations",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 88,
      "choices": {
        "app": "通過時刻を調べて、一緒に空を見上げる"
      }
    },
    "o-power": {
      "title": "発電量が足りない",
      "phase": "operations",
      "mode": "common",
      "kind": "柱",
      "order": 89,
      "choices": {
        "reduce": "観測の回数を減らす",
        "attitude": "衛星の向きを工夫して発電を増やす",
        "continue": "様子を見ながら観測を続ける"
      }
    },
    "o-thermal": {
      "title": "温度が想定より高い",
      "phase": "operations",
      "mode": "common",
      "kind": "柱",
      "order": 90,
      "choices": {
        "pause": "観測機器を一時的に止めて冷やす",
        "continue": "上限に近いまま観測を続ける"
      }
    },
    "o-hang": {
      "title": "観測機器が応答しない",
      "phase": "operations",
      "mode": "common",
      "kind": "偶然",
      "order": 91,
      "choices": {
        "reset": "機器をリセットする",
        "ota": "ソフトウェアを書き換えて直す",
        "switch": "予備の計算機に切り替える",
        "safe": "セーフモードで様子を見る"
      }
    },
    "x-safemode": {
      "title": "運用負荷の増大",
      "phase": "operations",
      "mode": "expert",
      "kind": "伏線回収",
      "order": 92,
      "choices": {
        "automate": "タイムライン運用と自動監視を導入",
        "shift": "当番制で人手を確保"
      }
    },
    "o-routine": {
      "title": "観測の日々",
      "phase": "operations",
      "mode": "common",
      "kind": "柱",
      "order": 93,
      "choices": {
        "plan": "成功の条件に沿って計画的に観測する",
        "explore": "面白そうな現象を見つけたら狙ってみる"
      }
    },
    "o-request": {
      "title": "研究者から観測のリクエスト",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 94,
      "choices": {
        "accept": "引き受ける",
        "plan": "今の観測計画を優先する"
      }
    },
    "o-school": {
      "title": "授業で衛星とつながる日",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 95,
      "choices": {
        "visit": "学校にアンテナを持って行く",
        "online": "管制室からオンラインでつなぐ"
      }
    },
    "o-viral": {
      "title": "宇宙からの写真が話題に",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 96,
      "choices": {
        "request": "撮影リクエストを募集する",
        "steady": "計画どおりの観測を続ける"
      }
    },
    "o-storm": {
      "title": "大きな太陽フレアが発生",
      "phase": "operations",
      "mode": "common",
      "kind": "偶然",
      "order": 97,
      "choices": {
        "safe": "機器を止めてセーフモードでやり過ごす",
        "observe": "これこそ観測のチャンス！観測を続ける",
        "continue": "そのまま観測を続ける"
      }
    },
    "o-debris": {
      "title": "デブリ接近の警報",
      "phase": "operations",
      "mode": "common",
      "kind": "偶然",
      "order": 98,
      "choices": {
        "share": "関係機関と情報を共有して見守る",
        "attitude": "向きを変えて、当たりにくい姿勢にする"
      }
    },
    "o-reset-again": {
      "title": "試験のときと同じリセットが",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 99,
      "choices": {
        "ota": "原因を突き止めてソフトを書き換える",
        "live": "再起動しても困らない運用に切り替える"
      }
    },
    "o-battery": {
      "title": "バッテリーが年をとってきた",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 100,
      "choices": {
        "care": "電気を使いすぎない運用に変える",
        "keep": "今の観測ペースを続ける"
      }
    },
    "x-downlink": {
      "title": "ダウンリンク容量のひっ迫",
      "phase": "operations",
      "mode": "expert",
      "kind": "伏線回収",
      "order": 101,
      "choices": {
        "compress": "オンボード圧縮と優先度付けを導入",
        "station": "海外の地上局パスを追加購入",
        "reduce": "観測頻度を下げて調整"
      }
    },
    "o-fatigue": {
      "title": "運用チームが疲れてきた",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 102,
      "choices": {
        "rotate": "当番の割り当てを見直す",
        "automate": "決まった作業を自動化する",
        "endure": "もう少し頑張る"
      }
    },
    "o-joint": {
      "title": "共同観測のお誘い",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 103,
      "choices": {
        "join": "一緒に観測する",
        "later": "今は自分たちの観測を優先する"
      }
    },
    "o-season": {
      "title": "季節が変わってきた",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 104,
      "choices": {
        "track": "季節の変化を追いかける",
        "focus": "大事な地域に絞って観測を続ける"
      }
    },
    "o-moon": {
      "title": "満月の夜の撮影",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 105,
      "choices": {
        "avoid": "新月の前後に撮影を集中する",
        "moon": "月明かりの景色も撮ってみる"
      }
    },
    "o-ham-alert": {
      "title": "無線家からの知らせ",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 106,
      "choices": {
        "check": "すぐにデータを確認する"
      }
    },
    "x-frb": {
      "title": "異常対応の体制づくり",
      "phase": "operations",
      "mode": "expert",
      "kind": "伏線回収",
      "order": 107,
      "choices": {
        "board": "異常対応ボードを設置",
        "adhoc": "その都度、担当者が判断"
      }
    },
    "o-share": {
      "title": "データをどう公開する？",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 108,
      "choices": {
        "open": "だれでも使えるように公開する",
        "paper": "まずは研究論文にまとめる"
      }
    },
    "o-reentry": {
      "title": "高度が下がってきた",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 109,
      "choices": {
        "sprint": "残りの期間で集中的に観測する",
        "farewell": "お別れの準備をして、記録を整える"
      }
    },
    "o-letter": {
      "title": "名付け親からの手紙",
      "phase": "operations",
      "mode": "beginner",
      "kind": "伏線回収",
      "order": 110,
      "choices": {
        "pass": "衛星が頭上を通る時刻を知らせる"
      }
    },
    "o-conference": {
      "title": "学会で発表しませんか？",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 111,
      "choices": {
        "present": "発表する",
        "paper": "論文にまとめることに集中する"
      }
    },
    "o-tiered": {
      "title": "目標の達成状況を振り返る",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 112,
      "choices": {
        "report": "達成した段階を支援者に報告する",
        "push": "次の段階を目指して観測計画を見直す"
      }
    },
    "o-next": {
      "title": "次の衛星の話",
      "phase": "operations",
      "mode": "common",
      "kind": "伏線回収",
      "order": 113,
      "choices": {
        "lessons": "ここまでの学びを資料にまとめ始める",
        "focus": "今はこの衛星の運用に集中する"
      }
    },
    "o-end": {
      "title": "運用期間の終わり",
      "phase": "operations",
      "mode": "common",
      "kind": "柱",
      "order": 114,
      "choices": {
        "extend": "延長して運用を続ける",
        "finish": "計画どおりに運用を終える",
        "finishHigh": "計画どおりに運用を終え、機能を安全に停止する"
      }
    },
    "b-name": {
      "title": "衛星に名前をつけよう",
      "phase": "concept",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 115,
      "choices": {
        "contest": "名前を広く募集する",
        "team": "チームのみんなで決める"
      }
    },
    "x-conops": {
      "title": "運用コンセプト（ConOps）の策定",
      "phase": "concept",
      "mode": "expert",
      "kind": "ランダム",
      "order": 116,
      "choices": {
        "write": "ConOpsを先に作る",
        "later": "設計と並行して必要に応じて作る"
      }
    },
    "g-ambitious-check": {
      "title": "大きな目標、本当に大丈夫？",
      "phase": "goals",
      "mode": "common",
      "kind": "伏線回収",
      "order": 117,
      "choices": {
        "add": "「最低限ここまで」の目標も決めておく",
        "keep": "大きな目標一本で行く"
      }
    },
    "b-power-tip": {
      "title": "電気の余裕、足りている？",
      "phase": "design",
      "mode": "beginner",
      "kind": "条件付き",
      "order": 118,
      "choices": {
        "plan": "機器を順番に使う計画を立てておく",
        "keep": "今の計画のまま進める"
      }
    },
    "x-link": {
      "title": "X帯リンクバジェットの精査",
      "phase": "design",
      "mode": "expert",
      "kind": "条件付き",
      "order": 119,
      "choices": {
        "antenna": "パッチアンテナを高利得品に変更",
        "elevation": "運用を高仰角パスに限定する"
      }
    },
    "d-large-payload": {
      "title": "大型装置チームからの相談",
      "phase": "design",
      "mode": "common",
      "kind": "条件付き",
      "order": 120,
      "choices": {
        "hire": "専門の協力者を増やす",
        "inhouse": "今のメンバーで工夫して進める"
      }
    },
    "f-factory": {
      "title": "町工場の仲間たちからの提案",
      "phase": "funding",
      "mode": "common",
      "kind": "伏線回収",
      "order": 121,
      "choices": {
        "accept": "地域の工場と一緒につくる",
        "core": "いまの工場だけでじっくりつくる"
      }
    },
    "f-lab": {
      "title": "研究室の試験設備を予約する？",
      "phase": "funding",
      "mode": "common",
      "kind": "伏線回収",
      "order": 122,
      "choices": {
        "book": "今のうちに予約しておく",
        "later": "開発の進み具合を見てから決める"
      }
    },
    "f-media": {
      "title": "新聞社から取材の依頼",
      "phase": "funding",
      "mode": "common",
      "kind": "ランダム",
      "order": 123,
      "choices": {
        "accept": "取材を受ける",
        "later": "打ち上げが近づいてからにしてもらう"
      }
    },
    "dd-software": {
      "title": "衛星のソフトウェアをどうつくる？",
      "phase": "detail",
      "mode": "common",
      "kind": "ランダム",
      "order": 124,
      "choices": {
        "ota": "宇宙でも書き換えられるようにする",
        "fixed": "シンプルに固定したソフトにする"
      }
    },
    "dd-frequency": {
      "title": "電波を使うための手続き",
      "phase": "detail",
      "mode": "common",
      "kind": "ランダム",
      "order": 125,
      "choices": {
        "early": "今のうちに手続きを始める",
        "later": "設計が固まってから手続きする"
      }
    },
    "x-fmea": {
      "title": "FMEA（故障モード影響解析）",
      "phase": "detail",
      "mode": "expert",
      "kind": "ランダム",
      "order": 126,
      "choices": {
        "full": "全サブシステムでFMEAを実施",
        "key": "主要機器に絞って実施"
      }
    },
    "dd-debris": {
      "title": "運用が終わった後のこと",
      "phase": "detail",
      "mode": "common",
      "kind": "伏線回収",
      "order": 127,
      "choices": {
        "device": "軌道離脱を早める装置を載せる",
        "none": "装置は載せない"
      }
    },
    "c-rival": {
      "title": "似たミッションの先輩がいた",
      "phase": "concept",
      "mode": "common",
      "kind": "ランダム",
      "order": 128,
      "choices": {
        "coop": "連絡して、経験を教えてもらう",
        "unique": "違いを出せるところを探す"
      }
    },
    "c-launch": {
      "title": "ロケットの席を確保する",
      "phase": "concept",
      "mode": "common",
      "kind": "ランダム",
      "order": 129,
      "choices": {
        "book": "今のうちに予約する",
        "later": "機体の目処が立ってから探す"
      }
    },
    "c-logo": {
      "title": "ミッションのロゴをつくろう",
      "phase": "concept",
      "mode": "common",
      "kind": "ランダム",
      "order": 130,
      "choices": {
        "kids": "子どもたちに絵を描いてもらう",
        "designer": "デザイナーにお願いする"
      }
    },
    "b-why-space": {
      "title": "なぜわざわざ宇宙から見るの？",
      "phase": "concept",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 131,
      "choices": {
        "wide": "広い範囲を一度に見られるから？",
        "clear": "空気にじゃまされないから？"
      }
    },
    "b-quiz-iss": {
      "title": "宇宙クイズ：宇宙ステーションの高さは？",
      "phase": "goals",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 132,
      "answer": "a400",
      "choices": {
        "a400": "約400km",
        "a4000": "約4,000km",
        "a36000": "約36,000km"
      }
    },
    "g-data-policy": {
      "title": "データの使い方のルール",
      "phase": "goals",
      "mode": "common",
      "kind": "ランダム",
      "order": 133,
      "choices": {
        "rule": "公開とクレジット表記のルールを決める",
        "later": "実際にデータが取れてから考える"
      }
    },
    "g-techdemo": {
      "title": "新しい技術にも挑戦する？",
      "phase": "goals",
      "mode": "common",
      "kind": "ランダム",
      "order": 134,
      "choices": {
        "demo": "新しい技術の実証も載せる",
        "proven": "実績のある技術だけでいく"
      }
    },
    "g-milestone": {
      "title": "打ち上げ日から逆算する",
      "phase": "goals",
      "mode": "common",
      "kind": "ランダム",
      "order": 135,
      "choices": {
        "set": "節目ごとに確認の日を決める",
        "flow": "その都度、柔軟に進める"
      }
    },
    "b-dream": {
      "title": "うまくいったら、何がうれしい？",
      "phase": "goals",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 136,
      "choices": {
        "data": "自分たちのデータが誰かの役に立つこと",
        "people": "宇宙を好きになる人が増えること",
        "grow": "自分たちが成長できること"
      }
    },
    "x-requirements": {
      "title": "要求のトレーサビリティ",
      "phase": "goals",
      "mode": "expert",
      "kind": "ランダム",
      "order": 137,
      "choices": {
        "matrix": "要求―検証マトリクスを作成",
        "light": "主要要求のみリスト化"
      }
    },
    "d-techdemo": {
      "title": "実証機器をどこに載せる？",
      "phase": "design",
      "mode": "common",
      "kind": "伏線回収",
      "order": 138,
      "choices": {
        "outside": "外側に取り付けて、宇宙の環境にさらす",
        "inside": "内側に収めて、安全に試す"
      }
    },
    "d-camera": {
      "title": "カメラの性能、どこを重視する？",
      "phase": "design",
      "mode": "common",
      "kind": "伏線回収",
      "order": 139,
      "choices": {
        "resolution": "細かく見ることを重視する",
        "swath": "広く見ることを重視する"
      }
    },
    "d-sensor": {
      "title": "放射線センサーの向き",
      "phase": "design",
      "mode": "common",
      "kind": "伏線回収",
      "order": 140,
      "choices": {
        "sun": "太陽の方向に向ける",
        "multi": "複数の方向に小さく分けて付ける"
      }
    },
    "f-contest": {
      "title": "宇宙ビジネスのコンテストに出る？",
      "phase": "funding",
      "mode": "common",
      "kind": "伏線回収",
      "order": 141,
      "choices": {
        "enter": "エントリーする",
        "skip": "今回は見送る"
      }
    },
    "f-alumni": {
      "title": "思わぬところからの応援",
      "phase": "funding",
      "mode": "common",
      "kind": "ランダム",
      "order": 142,
      "choices": {
        "accept": "ありがたく受け取り、定期的に報告する",
        "visit": "見学に来てもらい、直接お礼を伝える"
      }
    },
    "x-reserve": {
      "title": "マネジメントリザーブの設定",
      "phase": "funding",
      "mode": "expert",
      "kind": "ランダム",
      "order": 143,
      "choices": {
        "set": "予備費を確保する",
        "none": "予備費は設けない"
      }
    },
    "f-price": {
      "title": "部品が値上がりした",
      "phase": "funding",
      "mode": "common",
      "kind": "偶然",
      "order": 144,
      "choices": {
        "reserve": "用意しておいた予備費で対応する",
        "bulk": "必要な数をまとめて買う",
        "alt": "手に入りやすい部品に切り替える"
      }
    },
    "b-sponsor-visit": {
      "title": "スポンサーさんが見学に来る",
      "phase": "funding",
      "mode": "beginner",
      "kind": "伏線回収",
      "order": 145,
      "choices": {
        "tour": "実際の作業を見てもらう",
        "slides": "資料で分かりやすく説明する"
      }
    },
    "f-local": {
      "title": "町からの応援",
      "phase": "funding",
      "mode": "common",
      "kind": "ランダム",
      "order": 146,
      "choices": {
        "accept": "一緒に取り組む",
        "decline": "今の体制を保つ"
      }
    },
    "dd-antenna": {
      "title": "アンテナを広げる？",
      "phase": "detail",
      "mode": "common",
      "kind": "ランダム",
      "order": 147,
      "choices": {
        "deploy": "打ち上げ後に広げるアンテナにする",
        "fixed": "固定したアンテナにする"
      }
    },
    "dd-battery": {
      "title": "バッテリーの選び方",
      "phase": "detail",
      "mode": "common",
      "kind": "ランダム",
      "order": 148,
      "choices": {
        "space": "宇宙での実績がある電池を使う",
        "cotsTest": "民生品を選び、自分たちで試験する",
        "cots": "民生品をそのまま使う"
      }
    },
    "dd-coating": {
      "title": "機体の表面の色",
      "phase": "detail",
      "mode": "common",
      "kind": "ランダム",
      "order": 149,
      "choices": {
        "white": "白い塗装で光を反射する",
        "mli": "金色の断熱シートで包む",
        "bare": "アルミの地肌のまま"
      }
    },
    "b-gps": {
      "title": "衛星はどうやって自分の位置を知る？",
      "phase": "detail",
      "mode": "beginner",
      "kind": "ランダム",
      "order": 150,
      "choices": {
        "gps": "GPS受信機を載せる",
        "ground": "地上で計算した軌道を使う"
      }
    },
    "dd-scope": {
      "title": "「この機能も追加できない？」",
      "phase": "detail",
      "mode": "common",
      "kind": "条件付き",
      "order": 151,
      "choices": {
        "add": "一つだけ取り入れる",
        "next": "「次の衛星で」と約束する"
      }
    },
    "dd-lens": {
      "title": "小型カメラのレンズ",
      "phase": "detail",
      "mode": "common",
      "kind": "条件付き",
      "order": 152,
      "choices": {
        "cots": "市販のレンズを改造する",
        "space": "宇宙用のレンズを使う"
      }
    },
    "l-ground": {
      "title": "地上局のアンテナが動かない",
      "phase": "launch",
      "mode": "common",
      "kind": "偶然",
      "order": 153,
      "choices": {
        "friends": "他の地上局に助けを求める",
        "repair": "急いで修理する"
      }
    },
    "l-hams": {
      "title": "世界中から受信報告が届く",
      "phase": "launch",
      "mode": "common",
      "kind": "伏線回収",
      "order": 154,
      "choices": {
        "invite": "受信報告を広く募る",
        "thanks": "お礼を伝えて、自分たちの局で運用する"
      }
    },
    "l-swupdate": {
      "title": "宇宙で初めてのソフト更新",
      "phase": "launch",
      "mode": "common",
      "kind": "伏線回収",
      "order": 155,
      "choices": {
        "careful": "少しずつ送って、確かめながら更新する",
        "fast": "一度にまとめて送り込む"
      }
    },
    "l-firstlight": {
      "title": "最初の1枚をどこで撮る？",
      "phase": "launch",
      "mode": "common",
      "kind": "伏線回収",
      "order": 156,
      "choices": {
        "home": "自分たちの町",
        "science": "観測にいちばん大事な場所"
      }
    }
  }
} as const;
