/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif"
      },
      colors: {
        gray: "hsl(0, 0%, 75%)",
        violet1: "hsl(257, 7%, 63%)",
        violet2: "hsl(257, 27%, 26%)",
        violet3: "hsl(260, 8%, 14%)",
        grayishBlue: "hsl(230, 25%, 95%)",
        darkBlue: "hsl(255, 11%, 22%)",
        red: "hsl(0, 87%, 67%)",
        cyan: "hsl(180, 66%, 49%)",
      },
      maxWidth: {
        introMobile: "28ch",
        introDesktop: "40ch",
        advancedDesktop: "45ch"
      },
      backgroundImage: {
        desktopFormBg: "url('/bg-shorten-desktop.svg')",
        desktopBoostBg: "url('/bg-boost-desktop.svg')",
        mobileBoostBg: "url('/bg-boost-mobile.svg')",
        mobileFormBg: "url('/bg-shorten-mobile.svg')"
      }
    },
  },
  plugins: [],
}

