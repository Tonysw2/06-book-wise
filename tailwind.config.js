/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xm: { max: '350px' },
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        '2xl': { max: '1440px' },
        '3xl': { max: '1600px' },
      },

      backgroundImage: {
        sidebar: "url('/sidebar-background.svg')",

        'gradient-vertical':
          'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',

        'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,

        'gradient-arrow-left':
          'linear-gradient(to left, transparent 0%, #0E1116 70%)',

        'gradient-arrow-right':
          'linear-gradient(to right, transparent 0%, #0E1116 70%)',
      },
    },

    fontFamily: {
      default: ['Nunito', 'sans-serif'],
    },

    colors: {
      transparent: 'transparent',

      white: '#FFFFFF',
      black: '#000000',

      green: {
        100: '#50B2C0',
        200: '#255D6A',
        300: '#0A313C',
      },

      purple: {
        100: '#8381D9',
        200: '#2A2879',
      },

      gray: {
        100: '#F8F9FC',
        200: '#E6E8F2',
        300: '#D1D6E4',
        400: '#8D95AF',
        500: '#303F73',
        600: '#252D4A',
        700: '#181C2A',
        800: '#0E1116',
      },

      red: {
        500: '#F75A68',
      },
    },

    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeight: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },
  },
  plugins: [],
}
