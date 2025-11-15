/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Sage
        primary: {
          DEFAULT: '#2D5F4C',
          50: '#F0FAF8',
          100: '#D9F2ED',
          200: '#B3E5DB',
          300: '#8DD8C9',
          400: '#3A7A70',
          500: '#2D5F4C',  // Main
          600: '#234E48',
          700: '#1D3F3A',
          800: '#16312C',
          900: '#0F241F',
        },

        // Secondary - Terracotta
        secondary: {
          DEFAULT: '#D36C3E',
          50: '#FEF2EE',
          100: '#FDE5DC',
          200: '#FACAB9',
          300: '#E6A58E',
          400: '#E08B6D',
          500: '#D36C3E',  // Main
          600: '#B5532A',
          700: '#9A441E',
          800: '#7F3617',
          900: '#662B12',
        },

        // Background Colors
        bg: {
          primary: '#FAF7F4',    // Warm cream - main background
          secondary: '#FFFFFF',  // Pure white
          tertiary: '#F5F3EF',   // Darker cream
        },

        // Text Colors
        text: {
          primary: '#1A1A1A',    // Charcoal
          secondary: '#4A5568',  // Medium gray
          tertiary: '#718096',   // Light gray
        },

        // Border Colors
        border: {
          subtle: '#E2E2E4',
          medium: '#D1D5DB',
        },
      },

      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Fraunces', 'Georgia', 'serif'],
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
        'full': '9999px',
      },

      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.06)',
        'md': '0 4px 16px rgba(0,0,0,0.1)',
        'lg': '0 8px 24px rgba(0,0,0,0.12)',
        'xl': '0 12px 32px rgba(0,0,0,0.15)',
        'primary': '0 4px 16px rgba(45, 95, 76, 0.25)',
        'secondary': '0 4px 16px rgba(211, 108, 62, 0.2)',
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3A7A70, #2D5F4C)',
        'gradient-cta': 'linear-gradient(135deg, #2D5F4C 0%, #3A7A70 100%)',
        'gradient-warm': 'linear-gradient(135deg, #E6A58E 0%, #D36C3E 100%)',
      },

      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
