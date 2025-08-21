import React, { useEffect, useState } from "react";

export default function Collection() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
     // 👇 ここから新規追加
  {
    src: "/Collection/collection6.jpg",
    comment: "ミラーやウインカー付きの電動自転車風モデル。昭和の遊び心を感じさせる一台。",
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
    comment: "100円で占える昭和のレトロな星座占い機。駄菓子屋や温泉街で人気だった一品。",
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
    comment: "SANKYO製パチンコ台『スーパーコンビ』。カラフルな盤面とメカ感が昭和の娯楽を象徴。",
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
      comment: "NECのビデオカセットL-125s。チェック柄パッケージが時代を感じさせる映像記録メディア。",
    },
    {
      src: "/Collection/collection19.jpg",
      comment: "モモエシャンプーやエメロンリンス。レトロなデザインボトルが懐かしい生活必需品。",
    },
    {
      src: "/Collection/collection20.jpg",
      comment: "赤いラジカセ。ツインスピーカー仕様で、昭和の若者文化を象徴する存在。",
    },
    {
      src: "/Collection/collection21.jpg",
      comment: "公衆電話（赤電話）。ダイヤル式でコインを入れて利用した懐かしの通信手段。",
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
  comment: "グリーンキャップに付けられた大量のバッジ。南海ホークス関連グッズも確認できる。",
},
{
  src: "/Collection/collection29.jpg",
  comment: "観光地ペナント（鹿児島・別府・天草・阿蘇など）。昭和旅行土産の定番コレクション。",
},
{
  src: "/Collection/collection30.jpg",
  comment: "おまけのミニカー消しゴム。色とりどりで、駄菓子屋文化を象徴する懐かしの玩具。",
},
{
  src: "/Collection/collection31.jpg",
  comment: "ウルトラマンソフビ人形。緑のマーキングが特徴的な古いバージョン。",
},

  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (item) => {
    setActive(item);
    setOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">懐かしコレクション</h1>
        <p className="text-gray-600 mt-2">
          昭和レトロからレアアイテムまで。とうじ個人のコレクションの一部をご紹介します。
        </p>
      </header>

      {/* ギャラリー */}
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

      {/* モーダル（拡大表示） */}
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
