// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaisho: ['"Yuji Syuku"', 'serif'], // ← 楷書風(Google Fonts)を使うなら追加
      },
    },
  },
  plugins: [],
}
