/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      serif: ["ui-serif", "Georgia", "serif"],
      mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      display: ["Oswald", "sans-serif"],
      body: ["Poppins", '"Open Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        login: "#313339",
        lightBlue: "#3D9BD6",
        trueGray:"#AAACAE"
      },
    },
  },
  plugins: [],
};
