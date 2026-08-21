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
        kaisho: ['"Yuji Syuku"', 'serif'], // ← 楷書風(Google Fonts)を使うなら追加
      },
    },
  },
  plugins: [],
}
