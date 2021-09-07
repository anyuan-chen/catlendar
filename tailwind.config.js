module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbar: "#FEEEF6",
      },
    },
    fontFamily: {
      display: ["Mondapick"],
      body: ["Poppins"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
