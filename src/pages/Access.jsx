import React from "react";

export default function Access() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-green-800 mb-6 border-b pb-2">アクセスマップ</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">本社所在地</h2>
        <p className="text-sm leading-relaxed">
          〒670-0935 兵庫県姫路市北条口1丁目59番地<br />
          TEL：079-281-0671<br />
          FAX：079-281-0672
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">アクセス方法</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>JR「姫路駅」より徒歩6分</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Googleマップ</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="大和薬品 アクセスマップ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.123456789012!2d134.696789!3d34.824567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554e6b47c123abc%3A0x1234abcd5678ef90!2z6Z2S5aSn5a2m6ZaA!5e0!3m2!1sja!2sjp!4v169XYZ1234567!5m2!1sja!2sjp"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
