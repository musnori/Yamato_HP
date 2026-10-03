// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // サイト全体の既定フォント。Noto Sans JP を主に、OS標準の日本語フォントでフォールバック
        sans: [
          '"Noto Sans JP"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          'Meiryo',
          'sans-serif',
        ],
        // 見出し用の明朝体（老舗らしい落ち着きを出すため、h1・セクション見出しのみに使用）
        serif: ['"Noto Serif JP"', '"Hiragino Mincho ProN"', '"Yu Mincho"', 'serif'],
        kaisho: ['"Yuji Syuku"', 'serif'], // ← 楷書風(Google Fonts)を使うなら追加
      },
      colors: {
        brand: {
          DEFAULT: "#1d5b3c",
          dark: "#154530",
          light: "#eef4f0",
        },
        navy: "#1f2a37",
      },
    },
  },
  plugins: [],
}
