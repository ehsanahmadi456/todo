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
        'svg': '#6A7E8E',
        'dark-100': '#4B4B4B',
        'dark-200': '#5B576A',
        'dark-300': '#EDEDED',
        'dark-400': '#F2F2F4',
        'dark-500': '#3E3E3E',
        'success': '#16E25D',
        'error': '#FF0707',
        'progress': '#FF7310',
        'disable': '#B8B8B8',
        'light-tertiary': 'rgba(92,39,254,0.7)',
        'light-100-tertiary': 'rgb(174 148 254 / 70%)',
      },
      backgroundColor: {
        'primary': '#FFFFFF',
        'secondary': '#C165DD',
        'tertiary': '#5C27FE',
        'dark-300': '#F7F7F9',
        'dark-400': '#F7F8FF',
        'dark-500': '#F6F7F9',
        'dark-600': '#FCFCFC',
        'success': '#E8FCEF',
        'error': '#FFE8E8',
        'progress': '#FFF1E8',
        'disable': '#F1F0F5',
        'light-tertiary': 'rgba(92,39,254,0.7)',
      }
    },
  },
  plugins: [],
}
