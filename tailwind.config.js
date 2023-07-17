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
      },
      backgroundColor: {
        'primary': '#FFFFFF',
        'secondary': '#C165DD',
        'tertiary': '#5C27FE',
        'dark-300': '#F7F7F9',
        'dark-600': '#FCFCFC',
      }
    },
  },
  plugins: [],
}
