/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5d9',
          300: '#8da9c5',
          400: '#6789b0',
          500: '#426a9c',
          600: '#345580',
          700: '#2a4468',
          800: '#1e3250',
          900: '#15243c',
          950: '#0d1828',
        },
        gold: {
          50: '#fbf8f3',
          100: '#f5ebe0',
          200: '#ead7c2',
          300: '#dfc0a4',
          400: '#d4a986',
          500: '#c99268',
          600: '#b07a52',
          700: '#8e6041',
          800: '#6c4830',
          900: '#4a301f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-delayed': 'fadeInUp 0.6s ease-out 0.15s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
