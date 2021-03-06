module.exports = {
  mode: "jit",
  purge: [
    './docs/**/*.{vue,js,ts,jsx,tsx}',
    './docs/.vitepress/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
