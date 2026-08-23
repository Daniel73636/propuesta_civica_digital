import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        // Paleta Metro de Medellín — dark mode edition
        metro: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#6ee7a0',
          400: '#34d872',
          500: '#18c45e',  // Verde Metro puro
          600: '#10a04a',
          700: '#0d8040',
          800: '#0a6030',
          900: '#064020',
          950: '#021a0d',
        },
        // Negros y oscuros para el tema dark
        ink: {
          50:  '#f5f5f0',
          100: '#e0e0d8',
          200: '#c0bfb5',
          300: '#908f84',
          400: '#605f54',
          500: '#3a3930',
          600: '#252420',
          700: '#1a1a15',
          800: '#101010',
          900: '#080808',
          950: '#040404',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in':        'fadeIn 0.5s ease-out',
        'slide-up':       'slideUp 0.6s ease-out',
        'slide-down':     'slideDown 0.4s ease-out',
        'glow-pulse':     'glowPulse 3s ease-in-out infinite',
        'float':          'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'scanner':        'scanner 2s linear infinite',
        'spark':          'spark 1.5s ease-in-out infinite',
        'spin-slow':      'spin 8s linear infinite',
        'border-beam':    'borderBeam 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(32px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        slideDown: {
          '0%':   { transform: 'translateY(-16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',      opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(24,196,94,0.15)' },
          '50%':      { boxShadow: '0 0 60px rgba(24,196,94,0.40)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-16px) rotate(-1deg)' },
          '66%':      { transform: 'translateY(-8px) rotate(1deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        scanner: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        spark: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.8)' },
          '50%':      { opacity: '1', transform: 'scale(1.2)' },
        },
        borderBeam: {
          '0%':   { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '300% 0%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'metro':      '0 4px 32px rgba(24,196,94,0.20)',
        'metro-lg':   '0 8px 64px rgba(24,196,94,0.30)',
        'ink':        '0 4px 32px rgba(0,0,0,0.40)',
        'ink-lg':     '0 8px 64px rgba(0,0,0,0.60)',
        'glow-green': '0 0 40px rgba(24,196,94,0.25), 0 0 80px rgba(24,196,94,0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
