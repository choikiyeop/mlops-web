import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config/tailwind.config';

const config: Config = {
  content: [
    '../../packages/ui/src/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
      backgroundImage: {
        checked: "url('/icons/checked.png')",
      },
    },
  },
  plugins: [],
  presets: [sharedConfig],
};
export default config;
