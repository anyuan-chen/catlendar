module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbar: "#FEEEF6",
        pinkLight: "#FFDFDD",
        pinkDark: "#FFCACA",
      },
    },
    fontFamily: {
      display: ["Mondapick"],
      primary: ["Poppins"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
