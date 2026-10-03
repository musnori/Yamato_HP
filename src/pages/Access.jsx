import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import ContactBand from "../components/ContactBand";
import SEOHead from "../components/SEOHead";
import { BreadcrumbSchema } from "../components/StructuredData";
import { AlertTriangle, ExternalLink, ChevronDown } from "lucide-react";

const locations = [
  {
    id: "hq",
    name: "本社",
    rows: [
      { label: "住所", value: "〒670-0935\n兵庫県姫路市北条口1丁目59番地" },
      { label: "電話", value: "079-281-0671", tel: "0792810671" },
      { label: "FAX", value: "079-224-1870" },
      { label: "営業時間", value: "9:00〜17:00（土日祝除く）" },
      { label: "交通", value: "JR「姫路駅」より徒歩約6分" },
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7891.642052379018!2d134.694193800397!3d34.831643363447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e00c018022b1%3A0xfc3278ab139d6de1!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-!5e1!3m2!1sja!2sjp!4v1767060545045!5m2!1sja!2sjp",
    route: "https://maps.app.goo.gl/f8UGyDSMmE4ZavJ56",
    photos: [{ src: "/c.jpg", alt: "本社倉庫の外観" }],
  },
  {
    id: "abo",
    name: "阿保倉庫",
    rows: [
      { label: "住所", value: "〒670-0972（目安）\n兵庫県姫路市阿保甲403番地" },
      { label: "電話", value: "079-282-0164", tel: "0792820164" },
    ],
    note: "スタッフが常駐していない時間帯がございます。搬入・引取りでご来訪の際は、必ず事前にお電話で受付状況をご確認ください。",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.42293346531!2d134.6999285!3d34.82045739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e10ab00b1439%3A0x77e89a4abedc50ff!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-IOmYv-S_neWAieW6qw!5e0!3m2!1sja!2sjp!4v1755605585317!5m2!1sja!2sjp",
    route:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.42293346531!2d134.6999285!3d34.82045739999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e10ab00b1439%3A0x77e89a4abedc50ff!2z5aSn5ZKM6Jas5ZOB5qCq5byP5Lya56S-IOmYv-S_neWAieW6qw!5e0!3m2!1sja!2sjp!4v1755605585317!5m2!1sja!2sjp",
    photos: [
      { src: "/warehouses/abo1.jpg", alt: "阿保倉庫の内部" },
      { src: "/warehouses/abo2.jpg", alt: "阿保倉庫の外観" },
    ],
  },
  {
    id: "shikito",
    name: "飾東倉庫",
    rows: [{ label: "住所", value: "〒671-0218\n兵庫県姫路市飾東町庄191-1" }],
    note: "飾東倉庫への搬入・配送に関するお問い合わせは、本社（079-281-0671）またはお問い合わせフォームで承っております。",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6549.32900903482!2d134.7315798!3d34.839526899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355520668d29c701%3A0x1f64a0abadb91e57!2z44CSNjcxLTAyMTgg5YW15bqr55yM5aer6Lev5biC6aO-5p2x55S65bqE77yR77yZ77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1755605599771!5m2!1sja!2sjp",
    route:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6549.32900903482!2d134.7315798!3d34.839526899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355520668d29c701%3A0x1f64a0abadb91e57!2z44CSNjcxLTAyMTgg5YW15bqr55yM5aer6Lev5biC6aO-5p2x55S65bqE77yR77yZ77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1755605599771!5m2!1sja!2sjp",
    photos: [{ src: "/images/banner.jpg", alt: "飾東倉庫の外壁の看板" }],
  },
];

export default function Access() {
  return (
    <>
      <SEOHead pageKey="access" />
      <BreadcrumbSchema items={[{ name: "ホーム", url: "/" }, { name: "アクセス" }]} />

      <PageHeader
        title="アクセス"
        lead="本社および各倉庫の所在地をご案内します。ご来社・搬入の際は、事前にお電話でご連絡いただけますとスムーズです。"
      >
        <ul className="mt-5 grid grid-cols-3 gap-2 max-w-md">
          {locations.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="flex items-center justify-center gap-1 rounded border border-slate-300 bg-white py-2.5 text-sm font-bold text-slate-800 hover:border-brand hover:text-brand"
              >
                {l.name}
                <ChevronDown size={15} className="text-slate-400" />
              </a>
            </li>
          ))}
        </ul>
      </PageHeader>

      <div className="bg-white">
        {locations.map((l, i) => (
          <Section
            key={l.id}
            id={l.id}
            title={l.name}
            className={`scroll-mt-20 ${i % 2 === 1 ? "bg-slate-50 border-y border-slate-200" : ""}`}
          >
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-start">
              <div>
                <dl className="border-t border-slate-200 text-[15px]">
                  {l.rows.map((r) => (
                    <div key={r.label} className="grid grid-cols-[5.5rem_1fr] border-b border-slate-200 py-3">
                      <dt className="text-sm font-bold text-slate-900">{r.label}</dt>
                      <dd className="text-slate-700 whitespace-pre-line leading-relaxed">
                        {r.tel ? (
                          <a href={`tel:${r.tel}`} className="font-bold text-brand text-lg tabular-nums hover:underline">
                            {r.value}
                          </a>
                        ) : (
                          r.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                {l.note && (
                  <p className="mt-4 flex gap-2 border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
                    <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                    {l.note}
                  </p>
                )}

                <div className={`mt-4 grid gap-2 ${l.photos.length > 1 ? "grid-cols-2" : "grid-cols-1 max-w-sm"}`}>
                  {l.photos.map((p) => (
                    <img key={p.src} src={p.src} alt={p.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  ))}
                </div>

                {l.id === "shikito" && (
                  <Link to="/contact" className="mt-4 inline-block text-sm font-bold text-brand hover:underline underline-offset-4">
                    お問い合わせフォームへ
                  </Link>
                )}
              </div>

              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-200 bg-slate-100">
                  <iframe
                    title={`${l.name}の地図`}
                    src={l.map}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={l.route}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline underline-offset-4"
                >
                  Googleマップで開く
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </Section>
        ))}

        <ContactBand />
      </div>
    </>
  );
}
