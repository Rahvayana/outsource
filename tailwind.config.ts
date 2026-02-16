import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a182e',
          foreground: '#ffffff',
        },
        'background-light': '#f6f7f8',
        'background-dark': '#121820',
        gold: {
          50: '#FDF8E8',
          100: '#F9EDD3',
          200: '#F3DEA8',
          300: '#ECCD7B',
          400: '#D4AF37',
          500: '#B8941F',
          600: '#9A7819',
          700: '#7C5E15',
          800: '#5E4710',
          900: '#40300C',
          950: '#2A2008',
        },
        dark: {
          bg: '#0A0A0A',
          card: '#111111',
          border: '#1F1F1F',
          hover: '#1A1A1A',
        },
        light: {
          bg: '#FFFFFF',
          card: '#FAFAFA',
          border: '#E5E5E5',
          hover: '#F5F5F5',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F5E6C8 50%, #B8860B 100%)',
        'gradient-gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #F5E6C8 50%, #D4AF37 100%)',
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
