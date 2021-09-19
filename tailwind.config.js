module.exports = {
  mode: "jit",
  purge: [
    "./docs/*.html",
    "./src/app/**/*.ts",
  ],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      boxShadow: ["active"]
    },
  },
  plugins: [],
}
