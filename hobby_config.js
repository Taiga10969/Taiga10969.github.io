// コンサート参戦履歴の構造化データ
const CONCERT_HISTORY = {
  "title": "My Concert Attendance History",
  "since": "2021",
  // 地図の設定
  "mapSettings": {
    // 初期ズームレベル（小さくすると広範囲、大きくすると詳細）
    // 例: 1-3: 世界全体、4-5: 大陸全体、6-8: 国全体、9-12: 都市全体、13以上: 詳細な地図
    "initialZoom": 5,
    // 初期表示位置（緯度・経度）
    // 例: 日本中心 { "lat": 36.2048, "lng": 138.2529 }
    "initialCenter": {
      "lat": 36.2048,
      "lng": 138.2529
    },
    // ホバー時のズームレベル（コンサート履歴にマウスを置いたときに地図を移動するときのズーム）
    // 例: 12-14: 都市レベル、15-17: 街区レベル、18以上: 建物レベル
    "hoverZoom": 10,
    // 地図の最大ズームレベル（ユーザーが拡大できる最大レベル）
    // 例: 18-19: 通常の地図、20以上: より詳細
    "maxZoom": 18,
    // マーカーの連続表示を有効にする（true: 地図を無限スクロールしてもマーカーが連続表示、false: マーカーは元の位置にのみ表示）
    // 例: true: 連続表示、false: 単一表示
    "worldCopyJump": true,
    // 地図の連続性をOFFにする（true: 地図を1つの世界に制限、false: 地図を無限にスクロール可能）
    // 例: true: 連続性OFF（地図が1つだけ）、false: 連続性ON（地図が無限に続く）
    "limitMapToSingleWorld": true,
    // 地図のスタイル（タイルレイヤー）
    // 選択肢: "osm", "cartodb-positron", "cartodb-darkmatter", "stamen-terrain", "stamen-toner", "esri-worldimagery"
    // osm: OpenStreetMap（標準的な地図）
    // cartodb-positron: CartoDB Positron（明るくモダンな地図）
    // cartodb-darkmatter: CartoDB Dark Matter（暗い地図）
    // stamen-terrain: Stamen Terrain（地形が強調された地図）
    // stamen-toner: Stamen Toner（白黒のシンプルな地図）
    // esri-worldimagery: Esri World Imagery（衛星画像）
    "mapStyle": "cartodb-positron"
  },
  "tours": [
    {
      "name": "NTT docomo presents THE MUSIC STADIUM 2026 Organized by ONE OK ROCK",
      "concerts": [
        {
          "date": "2026.04.04",
          "dayOfWeek": "Sat",
          "venue": "DAY01: Guest: UVERworld",
          "location": {
            "name": "MUFG STADIUM (国立競技場)",
            "lat": 35.678033235520964,
            "lng": 139.71459454079385,
            "country": "Japan"
          },
          "fullText": "2026.04.04(Sat) MUFG STADIUM (国立競技場)"
        },
        {
          "date": "2026.04.05",
          "dayOfWeek": "Sun",
          "venue": "DAY02: Guest: YOASOBI",
          "location": {
            "name": "MUFG STADIUM (国立競技場)",
            "lat": 35.678033235520964,
            "lng": 139.71459454079385,
            "country": "Japan"
          },
          "fullText": "2026.04.05(Sun) MUFG STADIUM (国立競技場)"
        },
      ]
    },
    {
      "name": "ONE OK ROCK DETOX JAPAN TOUR 2025",
      "concerts": [
        {
          "date": "2025.08.16",
          "dayOfWeek": "Sat",
          "venue": "OITA – CRASUS DOME OITA",
          "location": {
            "name": "クラサスドーム大分",
            "lat": 33.200983603157226, //33.200983603157226, 131.65757510185242
            "lng": 131.65757510185242,
            "country": "Japan"
          },
          "fullText": "2025.08.16(Sat) OITA – CRASUS DOME OITA"
        },
        {
          "date": "2025.08.17",
          "dayOfWeek": "Sun",
          "venue": "OITA – CRASUS DOME OITA",
          "location": {
            "name": "クラサスドーム大分",
            "lat": 33.200983603157226, //33.200983603157226, 131.65757510185242
            "lng": 131.65757510185242,
            "country": "Japan"
          },
          "fullText": "2025.08.17(Sun) OITA – CRASUS DOME OITA"
        },
        {
          "date": "2025.09.06",
          "dayOfWeek": "SAT",
          "venue": "HOKKAIDO – Daiwa House PREMIST DOME(SAPPORO DOME)",
          "location": {
            "name": "大和ハウス プレミストドーム",
            "lat": 43.01527630337005, //43.01527630337005, 141.40972717116392
            "lng": 141.40972717116392,
            "country": "Japan"
          },
          "fullText": "2025.09.06(SAT) HOKKAIDO – Daiwa House PREMIST DOME(SAPPORO DOME)"
        }
      ]
    },
    {
      "name": "B'z presents UNITE#02",
      "concerts": [
        {
          "date": "2025.06.29",
          "dayOfWeek": "SUN",
          "venue": "Kアリーナ横浜",
          "location": {
            "name": "Kアリーナ横浜",
            "lat": 35.46476371640423, //35.46476371640423, 139.63058208185703
            "lng": 139.63058208185703,
            "country": "Japan"
          },
          "fullText": "2025.06.29 (SUN) Kアリーナ横浜"
        }
      ]
    },
    {
      "name": "ONE OK ROCK 2024 PREMONITION WORLD TOUR",
      "concerts": [
        {
          "date": "2024.09.14",
          "dayOfWeek": "SAT",
          "venue": "TOKYO – AJINOMOTO STADIUM",
          "location": {
            "name": "味の素スタジアム",
            "lat": 35.66423223446603, //35.66423223446603, 139.52717418110186
            "lng": 139.52717418110186,
            "country": "Japan"
          },
          "fullText": "2024.09.14 (SAT) – TOKYO – AJINOMOTO STADIUM"
        },
        {
          "date": "2024.10.23",
          "dayOfWeek": "WED",
          "venue": "LOS ANGELES – KIA FORUM",
          "location": {
            "name": "The Forum (KIA FORUM)",
            "lat": 33.95828105084798, //33.95828105084798, -118.34200845866988
            "lng": -118.34200845866988,
            "country": "USA"
          },
          "fullText": "2024.10.23 (WED) – LOS ANGELES – KIA FORUM"
        }
      ]
    },
    {
      "name": "SUPER DRY SPECIAL LIVE Organized by ONE OK ROCK",
      "concerts": [
        {
          "date": "2024.05.18",
          "dayOfWeek": "SAT",
          "venue": "ベルーナドーム（埼玉）with WANIMA",
          "location": {
            "name": "ベルーナドーム",
            "lat": 35.768757697427816, //35.768757697427816, 139.42056204139217
            "lng": 139.42056204139217,
            "country": "Japan"
          },
          "fullText": "2024.05.18 (SAT) ベルーナドーム（埼玉）with WANIMA"
        },
        {
          "date": "2024.05.19",
          "dayOfWeek": "SUN",
          "venue": "ベルーナドーム（埼玉）with Awich",
          "location": {
            "name": "ベルーナドーム",
            "lat": 35.768757697427816, //35.768757697427816, 139.42056204139217
            "lng": 139.42056204139217,
            "country": "Japan"
          },
          "fullText": "2024.05.19 (SUN) ベルーナドーム（埼玉）with Awich"
        }
      ]
    },
    {
      "name": "VS",
      "concerts": [
        {
          "date": "2023.11.14",
          "dayOfWeek": "TUE",
          "venue": "東京ドーム with MY FIRST STORY",
          "location": {
            "name": "東京ドーム",
            "lat": 35.70577025389102, //35.70577025389102, 139.75197712789836
            "lng": 139.75197712789836,
            "country": "Japan"
          },
          "fullText": "2023.11.14 (TUE) 東京ドーム with MY FIRST STORY"
        }
      ]
    },
    {
      "name": "LUXURY DISEASE ASIA TOUR 2023",
      "concerts": [
        {
          "date": "2023.09.26",
          "dayOfWeek": "TUE",
          "venue": "Manila – Smart Araneta Coliseum",
          "location": {
            "name": "Smart Araneta Coliseum",
            "lat": 14.620874914102956, //14.620874914102956, 121.05338606783846
            "lng": 121.05338606783846,
            "country": "Philippines"
          },
          "fullText": "2023.09.26 (TUE) Manila – Smart Araneta Coliseum"
        }
      ]
    },
    {
      "name": "ONE OK ROCK 2023 LUXURY DISEASE JAPAN TOUR",
      "concerts": [
        {
          "date": "2023.01.28",
          "dayOfWeek": "SAT",
          "venue": "愛知；バンテリンドーム ナゴヤ",
          "location": {
            "name": "バンテリンドーム ナゴヤ",
            "lat": 35.18623831386264, //35.18623831386264, 136.9473867561913
            "lng": 136.9473867561913,
            "country": "Japan"
          },
          "fullText": "2023.01.28 (SAT) 愛知；バンテリンドーム ナゴヤ"
        },
        {
          "date": "2023.01.29",
          "dayOfWeek": "SUN",
          "venue": "愛知；バンテリンドーム ナゴヤ",
          "location": {
            "name": "バンテリンドーム ナゴヤ",
            "lat": 35.18623831386264, //35.18623831386264, 136.9473867561913
            "lng": 136.9473867561913,
            "country": "Japan"
          },
          "fullText": "2023.01.29 (SUN) 愛知；バンテリンドーム ナゴヤ"
        },
        {
          "date": "2023.02.12",
          "dayOfWeek": "SUN",
          "venue": "大阪；京セラドーム大阪",
          "location": {
            "name": "京セラドーム大阪",
            "lat": 34.669465605287904, //34.669465605287904, 135.4765718343116
            "lng": 135.4765718343116,
            "country": "Japan"
          },
          "fullText": "2023.02.12 (SUN) 大阪；京セラドーム大阪"
        },
        {
          "date": "2023.04.04",
          "dayOfWeek": "TUE",
          "venue": "東京；東京ドーム",
          "location": {
            "name": "東京ドーム",
            "lat": 35.70577025389102, //35.70577025389102, 139.75197712789836
            "lng": 139.75197712789836,
            "country": "Japan"
          },
          "fullText": "2023.04.04 (TUE) 東京；東京ドーム"
        },
        {
          "date": "2023.04.05",
          "dayOfWeek": "WED",
          "venue": "東京；東京ドーム",
          "location": {
            "name": "東京ドーム",
            "lat": 35.70577025389102, //35.70577025389102, 139.75197712789836
            "lng": 139.75197712789836,
            "country": "Japan"
          },
          "fullText": "2023.04.05 (WED) 東京；東京ドーム"
        }
      ]
    },
    {
      "name": "ONE OK ROCK 2021 \"Day to Night Acoustic Sessions\" at STELLAR THEATER",
      "concerts": [
        {
          "date": "2021.07.23",
          "dayOfWeek": "FRI",
          "venue": "河口湖ステラシアター",
          "location": {
            "name": "河口湖ステラシアター",
            "lat": 35.48051291228432, //35.48051291228432, 138.75957385487402
            "lng": 138.75957385487402,
            "country": "Japan"
          },
          "fullText": "2021.07.23 (FRI) 河口湖ステラシアター"
        }
      ]
    }
  ]
};

// 野球観戦履歴の構造化データ
const BASEBALL_HISTORY = {
  "title": "My Baseball Game Attendance History",
  "since": "2023",
  "games": [
    {
      "date": "2025.04.29",
      "dayOfWeek": "TUE",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.04.29 (TUE) 中日ドラゴンズ(4) vs 阪神タイガース(1) @ バンテリンドームナゴヤ ●",
      "details": "スコア: 4-1\n勝投手: 涌井，敗投手: 才木，セーブ：松山\n本塁打: 細川（2回裏ソロ 第2号），佐藤輝（4回表ソロ 第9号）"
    },
    {
      "date": "2025.04.30",
      "dayOfWeek": "WED",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.04.30 (WED) 中日ドラゴンズ(5) vs 阪神タイガース(4) @ バンテリンドームナゴヤ ●",
      "details": "スコア: 5-4\n勝投手: 清水，敗投手: ビーズリー\n本塁打: 木下（3回裏ソロ 第1号）"
    },
    {
      "date": "2025.05.01",
      "dayOfWeek": "THU",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.05.01 (THU) 中日ドラゴンズ(3) vs 阪神タイガース(2) @ バンテリンドームナゴヤ ●",
      "details": "スコア: 3-2\n勝投手: 三浦，敗投手: 大竹，セーブ: マルテ\n本塁打: 佐藤輝（5回表ソロ 第10号）"
    },
    {
      "date": "2025.05.23",
      "dayOfWeek": "FRI",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.05.23 (FRI) 中日ドラゴンズ(0) vs 阪神タイガース(3) @ バンテリンドームナゴヤ ○",
      "details": "スコア: 0-3\n勝投手: 湯浅，敗投手: 藤嶋，セーブ: 岩崎"
    },
    {
      "date": "2025.06.27",
      "dayOfWeek": "FRI",
      "league": "NPB",
      "homeTeam": "東京ヤクルトスワローズ",
      "awayTeam": "阪神タイガース",
      "venue": "明治神宮野球場",
      "fullText": "2025.06.27 (FRI) 東京ヤクルトスワローズ(4) vs 阪神タイガース(3) @ 明治神宮野球場 ●",
      "details": "スコア: 4-3\n勝投手: 石山，敗投手: 及川\n本塁打: 並木（7回裏ソロ 第2号），オスナ（7回裏2ラン 第4号）"
    },
    {
      "date": "2025.06.28",
      "dayOfWeek": "SAT",
      "league": "NPB",
      "homeTeam": "東京ヤクルトスワローズ",
      "awayTeam": "阪神タイガース",
      "venue": "明治神宮野球場",
      "fullText": "2025.06.28 (SAT) 東京ヤクルトスワローズ(0) vs 阪神タイガース(2) @ 明治神宮野球場 ◯",
      "details": "スコア: 0-2\n勝投手: デュプランティエ，敗投手: 高橋，セーブ: 岩崎\n本塁打: 森下（5回表2ラン 第12号）"
    },
    {
      "date": "2025.08.05",
      "dayOfWeek": "TUE",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.08.05 (TUE) 中日ドラゴンズ(2) vs 阪神タイガース(6) @ バンテリンドームナゴヤ ◯",
      "details": "スコア: 2-6\n勝投手: ハートウィグ，敗投手: 橋本，セーブ: 石井\n本塁打: 佐藤輝（8回表3ラン 第28号）"
    },
    {
      "date": "2025.08.06",
      "dayOfWeek": "WED",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.08.06 (WED) 中日ドラゴンズ(2) vs 阪神タイガース(3) @ バンテリンドームナゴヤ ◯",
      "details": "スコア: 2-3\n勝投手: 及川，敗投手: 橋本，セーブ: 石井\n本塁打: 上林（5回裏ソロ 第12号）"
    },
    {
      "date": "2025.08.07",
      "dayOfWeek": "THU",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.08.07 (THU) 中日ドラゴンズ(8) vs 阪神タイガース(3) @ バンテリンドームナゴヤ ●",
      "details": "スコア: 8-3\n勝投手: 金丸，敗投手: 伊原，セーブ: 石井\n本塁打: 中川（2回表ソロ 第1号），チェイビス（2回裏ソロ 第2号），佐藤輝（4回表ソロ 第29号）"
    },
    {
      "date": "2025.09.02",
      "dayOfWeek": "TUE",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.09.02 (TUE) 中日ドラゴンズ(3) vs 阪神タイガース(5) @ バンテリンドームナゴヤ ○",
      "details": "スコア: 3-5\n勝投手: 村上，敗投手: マラー，セーブ: 石井\n本塁打: 佐藤輝（3回表2ラン 第35号），熊谷（3回表2ラン 第1号）"
    },
    {
      "date": "2025.09.03",
      "dayOfWeek": "WED",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2025.09.03 (WED) 中日ドラゴンズ(5) vs 阪神タイガース(2) @ バンテリンドームナゴヤ ●",
      "details": "スコア: 5-2\n勝投手: 大野，敗投手: 伊藤，セーブ: 松山\n本塁打: 中川（3回表ソロ 第2号），細川（5回裏3ラン 第14号），森下（6回裏ソロ 第20号），石川（6回裏ソロ 第1号）"
    },
    {
      "date": "2024.09.20",
      "dayOfWeek": "FRI",
      "league": "NPB",
      "homeTeam": "横浜DeNAベイスターズ",
      "awayTeam": "阪神タイガース",
      "venue": "横浜スタジアム",
      "fullText": "2024.09.20 (FRI) 横浜DeNAベイスターズ(9) vs 阪神タイガース(6) @ 横浜スタジアム ●",
      "details": "スコア: 9-6\n勝投手: 伊勢，敗投手: 西勇\n本塁打: オースティン（3回裏3ラン 第24号），筒香（7回裏2ラン 第7号）\n公式成績：https://npb.jp/bis/2024/games/s2024092001450.html"
    },
    {
      "date": "2024.09.08",
      "dayOfWeek": "SUN",
      "league": "NPB",
      "homeTeam": "東京ヤクルトスワローズ",
      "awayTeam": "阪神タイガース",
      "venue": "明治神宮野球場",
      "fullText": "2024.09.08 (SUN) 東京ヤクルトスワローズ(5) vs 阪神タイガース(3) @ 明治神宮野球場 ●",
      "details": "スコア: 5-3\n勝投手: 高梨，敗投手: 西勇，セーブ: 小澤\n本塁打: 山田（2回裏2ラン 第11号），澤井（3回裏3ラン 第1号），森下（4回表2ラン 第13号）\n公式成績：https://npb.jp/bis/2024/games/s2024090801422.html"
    },
    {
      "date": "2024.09.06",
      "dayOfWeek": "FRI",
      "league": "NPB",
      "homeTeam": "東京ヤクルトスワローズ",
      "awayTeam": "阪神タイガース",
      "venue": "明治神宮野球場",
      "fullText": "2024.09.06 (FRI) 東京ヤクルトスワローズ(1) vs 阪神タイガース(9) @ 明治神宮野球場 ◯",
      "details": "スコア: 1-9\n勝投手: ビーズリー，敗投手: サイスニード\n本塁打: 佐藤輝（6回表満塁 第12号）\n公式成績：https://npb.jp/bis/2024/games/s2024090601416.html"
    },
    {
      "date": "2024.07.12",
      "dayOfWeek": "FRI",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2024.07.12 (FRI) 中日ドラゴンズ(3) vs 阪神タイガース(0) @ バンテリンドームナゴヤ ●",
      "details": "スコア: 3-0\n勝投手: 高橋宏，敗投手: 村上，セーブ: マルティネス\n本塁打: 細川（2回裏2ラン 第10号）\n公式成績：https://npb.jp/bis/2024/games/s2024071201283.html"
    },
    {
      "date": "2024.06.26",
      "dayOfWeek": "WED",
      "league": "NPB",
      "homeTeam": "阪神タイガース",
      "awayTeam": "中日ドラゴンズ",
      "venue": "阪神甲子園球場",
      "fullText": "2024.06.26 (WED) 阪神タイガース(1) vs 中日ドラゴンズ(1) @ 阪神甲子園球場 -",
      "details": "スコア: 1-1\n勝投手: --，敗投手: --\n本塁打: 細川（6回裏ソロ 第9号）\n公式成績：https://npb.jp/bis/2024/games/s2024062601244.html"
    },
    {
      "date": "2024.05.15",
      "dayOfWeek": "WED",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2024.05.15 (WED) 中日ドラゴンズ(0) vs 阪神タイガース(1) @ バンテリンドームナゴヤ ○",
      "details": "スコア: 0-1\n勝投手: 島本，敗投手: 斎藤，セーブ: 岩崎\n公式成績：https://npb.jp/bis/2024/games/s2024051501204.html"
    },
    {
      "date": "2024.05.07",
      "dayOfWeek": "TUE",
      "league": "NPB",
      "homeTeam": "阪神タイガース",
      "awayTeam": "広島東洋カープ",
      "venue": "阪神甲子園球場",
      "fullText": "2024.05.07 (TUE) 阪神タイガース(0) vs 広島東洋カープ(2) @ 阪神甲子園球場 ●",
      "details": "スコア: 0-2\n勝投手: 床田，敗投手: 村上，セーブ: 栗林\n公式成績：https://npb.jp/bis/2024/games/s2024050701186.html"
    },
    {
      "date": "2024.04.12",
      "dayOfWeek": "FRI",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2024.04.12 (FRI) 中日ドラゴンズ(2) vs 阪神タイガース(2) @ バンテリンドームナゴヤ ●",
      "details": "スコア: 2-2\n勝投手: --，敗投手: --\n公式成績：https://npb.jp/bis/2024/games/s2024041201124.html"
    },
    {
      "date": "2023.10.28",
      "dayOfWeek": "SAT",
      "league": "NPB",
      "homeTeam": "オリックス・バファローズ",
      "awayTeam": "阪神タイガース",
      "venue": "京セラドーム大阪",
      "fullText": "2023.10.28 (SAT) オリックス・バファローズ(0) vs 阪神タイガース(9) @ 京セラドーム大阪 ○",
      "details": "【日本シリーズ】\nスコア: 0-8\n勝投手: 村上，敗投手: 山本\n公式成績：https://npb.jp/bis/2023/games/s2023102801856.html"
    },
    {
      "date": "2023.10.20",
      "dayOfWeek": "FRI",
      "league": "NPB",
      "homeTeam": "阪神タイガース",
      "awayTeam": "広島東洋カープ",
      "venue": "阪神甲子園球場",
      "fullText": "2023.10.20 (FRI) 阪神タイガース(4) vs 広島東洋カープ(2) @ 阪神甲子園球場 ○",
      "details": "【クセントラル・リーグ クライマックスシリーズ】\nスコア: 4-2\n勝投手: 桐敷，敗投手: 床田，セーブ: 岩崎\n公式成績：https://npb.jp/bis/2023/games/s2023102001848.html"
    },
    {
      "date": "2023.09.24",
      "dayOfWeek": "SUN",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2023.09.24 (SUN) 中日ドラゴンズ(0) vs 阪神タイガース(0) @ バンテリンドームナゴヤ -",
      "details": "スコア: 0-0\n勝投手: --，敗投手: --\n公式成績：https://npb.jp/bis/2023/games/s2023092401308.html"
    },
    {
      "date": "2023.09.06",
      "dayOfWeek": "WED",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2023.09.06 (WED) 中日ドラゴンズ(0) vs 阪神タイガース(1) @ バンテリンドームナゴヤ ○",
      "details": "スコア: 0-1\n勝投手: 才木，敗投手: 小笠原，セーブ: 岩崎\n公式成績：https://npb.jp/bis/2023/games/s2023090601266.html"
    },
    {
      "date": "2023.09.05",
      "dayOfWeek": "TUE",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2023.09.05 (TUE) 中日ドラゴンズ(2) vs 阪神タイガース(8) @ バンテリンドームナゴヤ ○",
      "details": "スコア: 2-8\n勝投手: 西勇，敗投手: 涌井\n本塁打: 細川（6回裏ソロ 第21号）\n公式成績：https://npb.jp/bis/2023/games/s2023090501263.html"
    },
    {
      "date": "2023.05.17",
      "dayOfWeek": "WED",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2023.05.17 (WED) 中日ドラゴンズ(1) vs 阪神タイガース(3) @ バンテリンドームナゴヤ ○",
      "details": "スコア: 1-3\n勝投手: 西勇，敗投手: 涌井，セーブ: 岩崎\n本塁打: 細川（6回裏ソロ 第2号）\n公式成績：https://npb.jp/bis/2023/games/s2023051701059.html"
    },
    {
      "date": "2023.04.21",
      "dayOfWeek": "FRI",
      "league": "NPB",
      "homeTeam": "中日ドラゴンズ",
      "awayTeam": "阪神タイガース",
      "venue": "バンテリンドームナゴヤ",
      "fullText": "2023.04.21 (FRI) 中日ドラゴンズ(4) vs 阪神タイガース(1) @ バンテリンドームナゴヤ ●",
      "details": "スコア: 4-1\n勝投手: 小笠原，敗投手: 青柳，セーブ: マルティネス\n公式成績：https://npb.jp/bis/2023/games/s2023042100993.html"
    },

    
  ]
};

