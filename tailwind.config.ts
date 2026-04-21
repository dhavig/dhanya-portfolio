import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1d1d1f',
        muted: '#6e6e73',
        light: '#f5f5f7',
        brand: '#0071e3',
        brandHover: '#0077ed',
        brandLight: '#2997ff',
        brandLight2: '#5ac8fa',
        success: '#30d158',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
        glassDark: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backdropSaturate: {
        180: '1.8',
        200: '2',
      },
      keyframes: {
        appleUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pingGreen: {
          '0%, 100%': { boxShadow: '0 0 0 3px rgba(48,209,88,0.25)' },
          '70%': { boxShadow: '0 0 0 8px rgba(48,209,88,0)' },
        },
        chevBounce: {
          '0%, 100%': { transform: 'rotate(45deg) translate(0,0)' },
          '50%': { transform: 'rotate(45deg) translate(3px,3px)' },
        },
        pingPulse: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '80%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        photoFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(41,151,255,0)' },
          '50%': { boxShadow: '0 0 24px 6px rgba(41,151,255,0.25)' },
        },
      },
      animation: {
        appleUp: 'appleUp 0.9s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        pingGreen: 'pingGreen 2s ease infinite',
        chevBounce: 'chevBounce 1.5s ease infinite',
        pingPulse: 'pingPulse 2s ease-out infinite',
        photoFloat: 'photoFloat 4s ease-in-out infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
