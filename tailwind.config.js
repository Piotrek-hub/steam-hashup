/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        systemLightestGrey: "#DCDEDF",
        systemLighterGrey: "#B8BCBF",
        systemLightGrey: "#8B929A",
        systemGrey: "#67707B",
        systemDarkGrey: "#3D4450",
        systemDarkerGrey: "#23262E",
        systemDarkestGrey: "#0E141B",
        storeLightestGrey: "#CCD8E3",
        storeLighterGrey: "#A7BACC",
        storeLightGrey: "#7C8EA3",
        storeGrey: "#4e697d",
        storeDarkGrey: "#2A475E",
        storeDarkerGrey: "#1B2838",
        storeDarkestGrey: "#000F18",
        blue: "#1A9FFF",
        blueHi: "#00BBFF",
        green: "#5ba32b",
        greenHi: "#59BF40",
        orange: "#E35E1C",
        red: "#D94126",
        redHi: "#EE563B",
        dustyBlue: "#417a9b",
        lightBlue: " #B3DFFF",
        yellow: "#FFC82C",
        chalkyBlue: "#66C0F4",
      },
      backgroundImage: {
        gradientStoreBackground: "linear-gradient(180deg, #2A475E 0%, #2A475E 80%)",
        gradientLibraryBackground: " radial-gradient(farthest-corner at 40px 40px,#3D4450 0%, #23262E 80%)",
        storeNavigationGradient: "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
        gameBoxGradient: "linear-gradient( 315deg, #213c55 5%, #016968 95%)",
        buttonGradient: "linear-gradient( to bottom, #a4d007 5%, #536904 95%)"
      }
    },
  },
  plugins: [],
}
