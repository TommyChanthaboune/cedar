/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundBlue: '#F2F8FF',
        cedarBlack: '#171731',
        cedarBlue: '#13126C',
        cedarDarkerGray: '#65657B',
        cedarGray: '#65657B',
        cedarLightGray: '#E7E9EF',
        cedarMediumGray: '#6D7088',
        ctaBlue: '#3667E9',
        errorRed: '#C34648',
      },
      fontFamily: {
        heading: 'Georgia, serif',
      },
      breakpoints: {
        lg: '1028px',
      },
    },
  },
  plugins: [],
};
