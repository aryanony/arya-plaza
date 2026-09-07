/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F0E',
        inkLight: '#0F1816',
        inkCard: '#122120',
        teal: { deep: '#0F3D3E', DEFAULT: '#1C6B6D', bright: '#2DD4BF' },
        gold: { DEFAULT: '#9C6A1B', soft: '#E8C766', deep: '#A9841F' },
        ivory: '#F1EDE4',
        stone: '#C8D8D6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        gold: '0 0 40px -8px rgba(212,175,55,0.35)',
        teal: '0 0 40px -8px rgba(45,212,191,0.25)',
      },
    },
  },
  plugins: [],
}
