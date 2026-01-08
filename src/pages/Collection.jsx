import React, { useEffect, useState } from "react";

export default function Collection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      src: "/Collection/collection1.png",
      comment:
        "ジウジアーロデザインで名高い国産名車。グリーンのボディが映える一台。",
    },
    {
      src: "/Collection/collection2.png",
      comment:
        "甲羅の模様が美しい大型標本。存在感抜群のディスプレイピース。",
    },
    {
      src: "/Collection/collection3.png",
      comment:
        "プリーツシェードがレトロ可愛いスタンドライト。昭和の雰囲気たっぷり。",
    },
    {
      src: "/Collection/collection4.png",
      comment:
        "当時のスター選手がずらり。パッケージのヤレ感も味わい深い一品。",
    },
    {
      src: "/Collection/collection5.png",
      comment:
        "SHARPの電卓とそろばんが合体した名機。アナログとデジタルの融合！",
    },
    {
      src: "/Collection/collection6.jpg",
      comment:
        "スピードメーター、シフト変速機、隠ライト、ウインカー等、スーパーカーブームの時に発売された、昭和ごころを感じさせる一台。",
    },
    {
      src: "/Collection/collection7.jpg",
      comment: "SHARP製のビデオ一体型ラジカセ。重厚なデザインが当時を思い出させる逸品。",
    },
    {
      src: "/Collection/collection8.jpg",
      comment: "卵を同時にゆでられる昭和家電。オレンジ色の本体がレトロな雰囲気を演出。",
    },
    {
      src: "/Collection/collection9.jpg",
      comment: "使い込まれた木製そろばん。手に馴染んだ質感が歴史を物語る。",
    },
    {
      src: "/Collection/collection10.jpg",
      comment: "額に収められた旧紙幣コレクション。時代ごとの肖像とデザインが楽しめる。",
    },
    {
      src: "/Collection/collection11.jpg",
      comment: "100円で占える昭和のレトロな星座占い機。喫茶店で人気だった一品。",
    },
    {
      src: "/Collection/collection12.jpg",
      comment: "プロ野球選手カードアルバム。昭和のスター選手たちが勢ぞろいした貴重な一冊。",
    },
    {
      src: "/Collection/collection13.jpg",
      comment: "OLYMPUS PENカメラと外付けフラッシュ。半世紀以上前の撮影機材ながら、今も存在感抜群。",
    },
    {
      src: "/Collection/collection14.jpg",
      comment: "SANKYO製パチンコ一発台の名機『スーパーコンビ2』。カラフルな盤面とメカ感が昭和の娯楽を象徴。",
    },
    {
      src: "/Collection/collection15.jpg",
      comment: "アース製薬のレトロな殺虫スプレー。青い筒型デザインが時代を感じさせる。",
    },
    {
      src: "/Collection/collection16.jpg",
      comment: "毛皮の襟巻き。かつて冬の女性ファッションを彩った高級小物。",
    },
    {
      src: "/Collection/collection17.jpg",
      comment: "SONY製カセットボイスレコーダー。小型ながら高性能で、会議や取材で活躍した定番アイテム。",
    },
    {
      src: "/Collection/collection18.jpg",
      comment: "NECのベータマックスビデオカセットL-125s。チェック柄パッケージが時代を感じさせる映像記録メディア。",
    },
    {
      src: "/Collection/collection19.jpg",
      comment: "モモエシャンプーやエメロンリンス。レトロなデザインボトルが懐かしい生活必需品。",
    },
    {
      src: "/Collection/collection20.jpg",
      comment: "赤いダブルラジカセ。ダビングが簡単に出来て重宝したことを思い出します。",
    },
    {
      src: "/Collection/collection21.jpg",
      comment: "公衆電話（赤電話）。ダイヤル式で１０円玉を入れて利用したが、１０円玉が無くなり途中で会話が途切れました。",
    },
    {
      src: "/Collection/collection22.jpg",
      comment: "木製筐体の古ラジオ。重厚なデザインと大きなダイヤルが味わい深い一台。",
    },
    {
      src: "/Collection/collection23.jpg",
      comment: "掛け時計（Super Eight）。レトロな木目調デザインが家庭の雰囲気を彩った壁掛け時計。",
    },
    {
      src: "/Collection/collection24.jpg",
      comment: "シチズン製トラベルクロック。赤いケースと折りたたみ式が昭和らしいデザイン。",
    },
    {
      src: "/Collection/collection25.jpg",
      comment: "ピンク・レディーのごみ箱。アイドル全盛期を象徴する貴重なプロモーショングッズ。",
    },
    {
      src: "/Collection/collection26.jpg",
      comment: "近藤真彦ブリキ製筆箱。バイク姿のアイドル写真が時代を感じさせる一品。",
    },
    {
      src: "/Collection/collection27.jpg",
      comment: "アメリカンフットボール柄の筆箱。スポーツブームを反映した当時の学用品。",
    },
    {
      src: "/Collection/collection28.jpg",
      comment: "ソフトバンクホークスの前身、南海ホークスのキャップに付けられた大量のバッジ。",
    },
    {
      src: "/Collection/collection29.jpg",
      comment: "観光地ペナント（鹿児島・別府・天草・阿蘇など）。昭和旅行土産の定番コレクション。",
    },
    {
      src: "/Collection/collection30.jpg",
      comment: "スーパーカー消しゴム。ボールペンを使ってレースしてました。",
    },
    {
      src: "/Collection/collection31.jpg",
      comment: "ミラーマンのソフビ人形。緑のマーキングが特徴的な古いバージョン。",
    },
    {
      src: "/Collection/collection33.jpg",
      comment: "コカ・コーラ 1リットル瓶。厚みのあるリターナブルガラスが象徴的な大型ボトル。",
    },
    {
      src: "/Collection/collection32.jpg",
      comment: "花柄の魔法瓶ポット。メタルの注ぎ口とライトブルーの胴がレトロ可愛い（取説付き）。",
    },
    {
      src: "/Collection/collection34.jpg",
      comment: "折りたたみ式の食品カバー。レトロ柄メッシュが可愛いキッチン雑貨。",
    },
    {
      src: "/Collection/collection35.jpg",
      comment: "Nikon F3 + SB-7 ストロボのセット。プロも愛した名機の存在感。後付モータードライブも装着。",
    },
    {
      src: "/Collection/collection36.jpg",
      comment: "『Dunk』1986年10月号。80年代アイドル文化が詰まった一冊。",
    },
    {
      src: "/Collection/collection37.jpg",
      comment: "別冊『近代映画』伊豆の踊子 特集号。青春映画を象徴する名作。",
    },
    {
      src: "/Collection/collection38.jpg",
      comment: "『BOMB!』5月号。大判アップの表紙が時代の空気を伝える。表紙は西村知美。",
    },
    {
      src: "/Collection/collection39.jpg",
      comment: "『YOUNG SONG』11月号。アイドルと音楽の情報が満載のサウンド誌。",
    },
    {
      src: "/Collection/collection40.jpg",
      comment: "『YOUNG SONG』1月号 大型号。井上陽水特集の力強い表紙が印象的。",
    },
    {
      src: "/Collection/collection41.jpg",
      comment: "別冊『近代映画』吉永小百合 特別号。永遠の清純派スター大特集。",
    },
    {
      src: "/Collection/collection42.jpg",
      comment: "『週刊大衆』4/5号。グラビアと時事が同居する昭和の週刊誌カルチャー。",
    },
    {
      src: "/Collection/collection43.jpg",
      comment: "『近代映画』臨時増刊 美しい暦 9月号。花野と若者の表紙がさわやか。",
    },
    {
      src: "/Collection/collection44.jpg",
      comment: "任天堂ゲーム＆ウォッチ『ミッキーマウス』。シンプルながら夢中になったLCDゲーム機。",
    },
    {
      src: "/Collection/collection45.jpg",
      comment: "コカ・コーラ壁掛けクロック＆ポスター『I feel Coke』。昭和の広告カルチャーを象徴。女優は昭和のCM女王　松本孝美。",
    },
    {
      src: "/Collection/collection46.jpg",
      comment: "SONY製ベータビデオデッキとブラウン管テレビ。重量感のあるデザインが時代を物語る。",
    },
    {
      src: "/Collection/collection47.jpg",
      comment: "SEILORSの巾着袋。原宿ファッションを彩った青春アイテム。",
    },
    {
      src: "/Collection/collection48.jpg",
      comment: "昆虫かご。カブトムシやクワガタ採集の夏の定番アイテム。",
    },
    {
      src: "/Collection/collection49.jpg",
      comment: "キャラクター柄のお箸セット。アニメやヒーローがプリントされた昭和の学用品。",
    },
    {
      src: "/Collection/collection50.jpg",
      comment: "『巨人の星』お弁当箱。人気野球漫画とタイアップした学校ランチの定番。",
    },
    {
      src: "/Collection/IMG_2487.jpeg",
      comment: "舞台装置のように背景が広がる、凝ったつくりの「おはなでんわ」。小さなブランコや装飾から、当時の「夢のあるおもちゃ」らしさが伝わってきます。",
    },
    {
      src: "/Collection/IMG_2488.jpeg",
      comment: "イラストとコピーに時代の空気が残る、オリジナルパッケージ。遊び方まで丁寧に伝えようとする、昭和らしいやさしさを感じます。",
    },
    {
      src: "/Collection/IMG_2489.jpeg",
      comment: "コカ・コーラとファンタ、それぞれのカラーが楽しい限定ヨーヨー。手に取るだけで、当時のブームと高揚感がよみがえります。",
    },
    {
      src: "/Collection/IMG_2490.jpeg",
      comment: "ずっしりとした質感が魅力の、ブリキ製クラシックカー。経年の風合いも含めて味わいたい一台です。",
    },
    {
      src: "/Collection/IMG_2491.jpeg",
      comment: "独特のキーボード配列が懐かしい、往年のワープロ。仕事道具にも個性があった時代を感じさせます。",
    },
    {
      src: "/Collection/IMG_2492.jpeg",
      comment: "凛とした佇まいが印象的な、壁掛けの鹿の剥製。空間の雰囲気を一変させる存在感があります。",
    },
    {
      src: "/Collection/IMG_2493.jpeg",
      comment: "木の質感が懐かしい、昔ながらの学習机と椅子。ランドセルまで含めて、当時の風景が目に浮かびます。",
    },
    {
      src: "/Collection/IMG_2494.jpeg",
      comment: "学校の一角を切り取ったような、懐かしさあふれる佇まい。何気ない日常が、今では貴重な風景です。",
    },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (item) => {
    setActive(item);
    setOpen(true);
  };

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[url('/morninng.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative layout-container py-14">
          <p className="section-title">ARCHIVE</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            懐かしコレクション
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            昭和レトロからレアアイテムまで。個人のコレクションの一部をご紹介します（※一部AIを使って紹介しています）。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="layout-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => openModal(item)}
                className="text-left bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border"
              >
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{item.comment}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open && active && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black">
              <img
                src={active.src}
                alt=""
                className="w-full h-full object-contain max-h-[70vh] mx-auto"
              />
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600">{active.comment}</p>
              <div className="text-right mt-4">
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800 transition"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
