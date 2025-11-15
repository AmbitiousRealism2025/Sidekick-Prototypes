/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure Black & White
        black: '#000000',
        white: '#FFFFFF',

        // Gray Scale (9-step)
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#666666',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // Accent - Electric Blue (ONE STRATEGIC USE ONLY)
        accent: '#387CFF',

        // Semantic Mappings
        text: {
          primary: '#000000',
          secondary: '#666666',
          tertiary: '#A3A3A3',
        },

        bg: {
          primary: '#FFFFFF',
          secondary: '#F5F5F5',
          dark: '#000000',
        },

        border: '#E5E5E5',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      fontSize: {
        'xs': ['14px', { lineHeight: '20px' }],
        'sm': ['16px', { lineHeight: '24px' }],
        'base': ['18px', { lineHeight: '28px' }],
        'lg': ['20px', { lineHeight: '28px' }],
        'xl': ['24px', { lineHeight: '32px' }],
        '2xl': ['36px', { lineHeight: '40px' }],
        '3xl': ['48px', { lineHeight: '1.1' }],
        '4xl': ['60px', { lineHeight: '1.1' }],
        '5xl': ['72px', { lineHeight: '1' }],
        '6xl': ['96px', { lineHeight: '1' }],
        '7xl': ['120px', { lineHeight: '1' }],  // EXTREME
      },

      fontWeight: {
        normal: '400',
        bold: '700',
        // ONLY TWO WEIGHTS
      },

      letterSpacing: {
        tighter: '-0.05em',  // Very large headlines
        tight: '-0.03em',    // Large headlines
        normal: '0',
        wide: '0.05em',      // All-caps labels
        wider: '0.15em',     // Section labels
      },

      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
      },

      borderRadius: {
        'none': '0px',       // SHARP CORNERS DEFAULT
        'sm': '2px',         // Barely perceptible
      },

      boxShadow: {
        'none': 'none',
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 8px rgba(0,0,0,0.08)',
        // MINIMAL SHADOWS
      },

      // NO ANIMATIONS BY DEFAULT
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
}
