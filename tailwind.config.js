/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mono:[ "Space Mono", "monospace"]
      }
    },
  },
  plugins: [],
}