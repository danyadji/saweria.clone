/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./view/login.html"], // Sesuaikan jika ada path lain
  theme: {
    extend: {
      colors: {
        button: '#FAAE2B',
        login: '#8BD3DD',
        biru1 :'#F2F7F5',
        pink:'#FFBDC4',
      },
      fontFamily: {
          sans: ['Courier New', 'monospace','Poppins'],
      },
    },
  },
  plugins: [],
}
