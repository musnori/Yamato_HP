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
          TEL：<a href="tel:0792810671" className="text-green-600 hover:underline">079-281-0671</a><br />
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

      {/* Googleマップ */}
      <div className="shadow rounded-lg overflow-hidden">
        <div className="w-full h-[500px]">
          <iframe
            title="大和薬品 アクセスマップ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.123456789012!2d134.696789!3d34.824567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e6b47c123abc%3A0x1234abcd5678ef90!2z6Z2S5aSn5a2m6ZaA!5e0!3m2!1sja!2sjp!4v169XYZ1234567!5m2!1sja!2sjp"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}