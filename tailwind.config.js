/*

Customized

*/

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./public/**/*.html", "./src/**/*.js", "./src/components/**/*.js"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;