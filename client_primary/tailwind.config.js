/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./public/**/*.html", "./src/**/*.js", "./src/components/**/*.js"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [],
};
