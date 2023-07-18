/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'gradient-blue-pink': [theme('colors.blue.500'), theme('colors.pink.500')],
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#C165DD',
        'tertiary': '#5C27FE',
        'dark-100': '#4B4B4B',
        'dark-200': '#5B576A',
        'dark-300': '#EDEDED',
        'dark-400': '#F2F2F4',
        'light-tertiary': 'rgba(92,39,254,0.7)',
        'light-100-tertiary': 'rgb(174 148 254 / 70%)',
      },
      backgroundColor: {
        'primary': '#FFFFFF',
        'secondary': '#C165DD',
        'tertiary': '#5C27FE',
        'dark-300': '#F7F7F9',
        'dark-600': '#FCFCFC',
        'light-tertiary': 'rgba(92,39,254,0.7)',
      }
    },
  },
  plugins: [],
}
