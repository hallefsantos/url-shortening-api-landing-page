module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',

      cyan: '#2acfcf',
      violet: {
        grayish: '#9e9aa7',
        dark: '#3b3054',
        darker: '#232127',
      },
      gray: '#bfbfbf',
      red: '#f46262',
      blue: '#35323e',
      white: '#FFFFFF',
      black: '#000000',
    },

    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
