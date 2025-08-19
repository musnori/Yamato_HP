import React from "react";

export default function Access() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      {/* タイトル */}
      <div className="border-b pb-2">
        <h1 className="text-3xl font-bold text-green-800">アクセスマップ</h1>
      </div>

      {/* 本社所在地 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">本社所在地</h2>
        <address className="not-italic text-gray-700 leading-relaxed text-sm">
          〒670-0935<br />
          兵庫県姫路市北条口1丁目59番地<br />
          TEL：
          <a href="tel:0792810671" className="text-green-600 hover:underline">
            079-281-0671
          </a>
          <br />
          FAX：079-281-0672
        </address>
      </div>

      {/* アクセス方法 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">アクセス方法</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>JR「姫路駅」より徒歩6分</li>
        </ul>
      </div>

      {/* Googleマップ - 本社 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">本社マップ</h2>
        <div className="w-full h-[500px]">
          <iframe
            title="本社マップ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13100.431100700649!2d134.68534486822412!3d34.82838266599047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e00c018022b1%3A0x1eec2507211e2f52!2z44CSNjcwLTA5MzUg5YW15bqr55yM5aer6Lev5biC5YyX5p2h5Y-j77yR5LiB55uu77yV77yZIOWkp-WSjOODk-ODqw!5e0!3m2!1sja!2sjp!4v1755605702506!5m2!1sja!2sjp"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Googleマップ - 倉庫 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">阿保倉庫</h2>
        <div className="w-full h-[500px]">
          <iframe
            title="倉庫マップ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.42293346531!2d134.6999285!3d34.82045739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e10ab00b1439%3A0x77e89a4abedc50ff!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-IOmYv-S_neWAieW6qw!5e0!3m2!1sja!2sjp!4v1755605585317!5m2!1sja!2sjp"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Googleマップ - 営業所 */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">飾東倉庫</h2>
        <div className="w-full h-[500px]">
          <iframe
            title="営業所マップ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6549.32900903482!2d134.7315798!3d34.839526899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355520668d29c701%3A0x1f64a0abadb91e57!2z44CSNjcxLTAyMTgg5YW15bqr55yM5aer6Lev5biC6aO-5p2x55S65bqE77yR77yZ77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1755605599771!5m2!1sja!2sjp"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
