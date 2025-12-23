import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Access() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // 阿保倉庫：スライダー用
  const aboImages = ["/warehouses/abo1.jpg", "/warehouses/abo2.jpg"];
  const [aboIndex, setAboIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAboIndex((p) => (p + 1) % aboImages.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-slate-50">
      <section className="border-b bg-white">
        <div className="layout-container py-10">
          <p className="section-title">ACCESS</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">アクセス</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            本社・倉庫の所在地とアクセス方法をご案内します。ご来社前にご連絡ください。
          </p>
        </div>
      </section>

      <div className="layout-container py-10 space-y-8">

      {/* ───────────── 本社 ───────────── */}
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-3">本社所在地</h2>
            <address className="not-italic text-gray-700 leading-relaxed text-sm">
              〒670-0935<br />
              兵庫県姫路市北条口1丁目59番地<br />
              TEL：
              <a href="tel:0792810671" className="text-green-700 hover:underline">
                079-281-0671
              </a><br />
              FAX：079-224-1870
            </address>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="tel:0792810671" className="btn-primary">
                電話で問い合わせる
              </a>
              <span className="tag">JR「姫路駅」より徒歩6分</span>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-3">アクセス方法（本社）</h2>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                JR「姫路駅」より徒歩6分
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                お車でお越しの際は近隣駐車場をご利用ください
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="btn-outline">来社前に連絡する</Link>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-3">本社（マップ）</h2>
          <div className="w-full h-[420px] overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="本社マップ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13100.431238785877!2d134.68534486601976!3d34.82838179797159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e00c018022b1%3A0xfc3278ab139d6de1!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1755606818323!5m2!1sja!2sjp"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ───────────── 阿保倉庫 ───────────── */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-3">阿保倉庫 所在地</h2>
        <address className="not-italic text-gray-700 leading-relaxed text-sm">
          〒670-0972（目安）<br />
          兵庫県姫路市阿保甲403番地<br />
          TEL：<a href="tel:0792820164" className="text-green-700 hover:underline">079-282-0164</a>
        </address>
      </div>


      <div className="card p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-xl font-semibold">阿保倉庫（マップ）</h2>
          <a
            href="tel:0792820164"
            className="btn-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.06-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.06l-2.2 2.2z" />
            </svg>
            079-282-0164
          </a>
        </div>

        {/* スライダー */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200">
          {aboImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`阿保倉庫 写真 ${i + 1}`}
              className={`w-full h-[300px] md:h-[380px] object-cover transition-opacity duration-700 ease-in-out ${
                i === aboIndex ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
              loading="lazy"
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {aboImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setAboIndex(i)}
                className={`h-2 w-2 rounded-full transition ${i === aboIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"}`}
                aria-label={`slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setAboIndex((aboIndex - 1 + aboImages.length) % aboImages.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 grid place-items-center"
            aria-label="prev"
          >‹</button>
          <button
            onClick={() => setAboIndex((aboIndex + 1) % aboImages.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 grid place-items-center"
            aria-label="next"
          >›</button>
        </div>

        {/* 阿保 倉庫マップ */}
        <div className="w-full h-[420px] overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            title="阿保倉庫 マップ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.42293346531!2d134.6999285!3d34.82045739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e10ab00b1439%3A0x77e89a4abedc50ff!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-IOmYv-S_neWAieW6qw!5e0!3m2!1sja!2sjp!4v1755605585317!5m2!1sja!2sjp"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* ───────────── 飾東倉庫 ───────────── */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-3">飾東倉庫 所在地</h2>
        <address className="not-italic text-gray-700 leading-relaxed text-sm">
          〒671-0218<br />
          兵庫県姫路市飾東町庄１９１−１<br />
        </address>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-3">飾東倉庫（マップ）</h2>
        <div className="w-full h-[420px] overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            title="飾東倉庫 マップ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6549.32900903482!2d134.7315798!3d34.839526899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355520668d29c701%3A0x1f64a0abadb91e57!2z44CSNjcxLTAyMTgg5YW15bqr55yM5aer6Lev5biC6aO-5p2x55S65bqE77yR77yZ77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1755605599771!5m2!1sja!2sjp"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
