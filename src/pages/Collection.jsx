import React, { useEffect, useState } from "react";

export default function Collection() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // 画像とコメント（ファイル名はそのまま利用）
  const items = [
    {
      src: "/Collection/collection1.png",
      title: "1977年（昭和52年式） いすゞ自動車 117クーペ",
      comment:
        "ジウジアーロデザインで名高い国産名車。グリーンのボディが映える一台。",
    },
    {
      src: "/Collection/collection2.png",
      title: "ウミガメのはく製",
      comment:
        "甲羅の模様が美しい大型標本。存在感抜群のディスプレイピース。",
    },
    {
      src: "/Collection/collection3.png",
      title: "ベッドの電気",
      comment:
        "プリーツシェードがレトロ可愛いスタンドライト。昭和の雰囲気たっぷり。",
    },
    {
      src: "/Collection/collection4.png",
      title: "カルビー プロ野球カードケース",
      comment:
        "当時のスター選手がずらり。パッケージのヤレ感も味わい深い一品。",
    },
    {
      src: "/Collection/collection5.png",
      title: "電卓そろばん",
      comment:
        "SHARPの電卓とそろばんが合体した名機。アナログとデジタルの融合！",
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
          昭和レトロからレアアイテムまで。社内コレクションの一部をご紹介します。
        </p>
      </header>

      {/* ギャラリー */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.title}
            onClick={() => openModal(item)}
            className="text-left bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border"
          >
            <div className="aspect-[4/3] bg-gray-100">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.comment}</p>
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
                alt={active.title}
                className="w-full h-full object-contain max-h-[70vh] mx-auto"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {active.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{active.comment}</p>
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
