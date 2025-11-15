/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Electric Steel Blue
        primary: {
          DEFAULT: '#387CFF',
          50: '#EBF3FF',
          100: '#D6E7FF',
          200: '#ADCFFF',
          300: '#85B7FF',
          400: '#5C9FFF',
          500: '#387CFF',
          600: '#1B66E6',
          700: '#1550B8',
          800: '#0F3A8A',
          900: '#09245C',
        },

        // Secondary - Sage Green/Teal
        secondary: {
          DEFAULT: '#5FB5A5',
          50: '#F0FAF8',
          100: '#D9F2ED',
          200: '#B3E5DB',
          300: '#8DD8C9',
          400: '#76C6B7',
          500: '#5FB5A5',
          600: '#4A9084',
          700: '#3A7269',
          800: '#2A544D',
          900: '#1A3631',
        },

        // Accent - Burnt Copper
        accent: {
          DEFAULT: '#D36C3E',
          50: '#FDF4EF',
          100: '#FAE9DF',
          200: '#F5D3BF',
          300: '#F0BD9F',
          400: '#E29471',
          500: '#D36C3E',
          600: '#B85527',
          700: '#8F421E',
          800: '#663015',
          900: '#3D1D0C',
        },

        // Background Colors
        bg: {
          primary: '#F7F8FA',
          secondary: '#F5F3EF',
          tertiary: '#FFFFFF',
        },

        // Text Colors
        text: {
          primary: '#1C1C1E',
          secondary: '#4A5568',
          tertiary: '#718096',
        },

        // Border Colors
        border: {
          subtle: '#E2E2E4',
          medium: '#D1D5DB',
        },

        // Functional Colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },

      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Fraunces', 'serif'],
      },

      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
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
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },

      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.06)',
        'md': '0 4px 16px rgba(0,0,0,0.1)',
        'lg': '0 8px 24px rgba(0,0,0,0.12)',
        'xl': '0 12px 32px rgba(0,0,0,0.15)',
        'primary': '0 4px 16px rgba(56, 124, 255, 0.25)',
        'primary-lg': '0 6px 24px rgba(56, 124, 255, 0.35)',
        'secondary': '0 4px 16px rgba(95, 181, 165, 0.25)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
