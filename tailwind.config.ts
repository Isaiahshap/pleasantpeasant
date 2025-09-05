import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      'none': '0',
      DEFAULT: '0',
    },
    extend: {
      colors: {
        'pp-bg': 'var(--pp-bg)',
        'pp-ink': 'var(--pp-ink)', 
        'pp-wood': 'var(--pp-wood)',
        'pp-rust': 'var(--pp-rust)',
        'pp-olive': 'var(--pp-olive)',
        'pp-cream': 'var(--pp-cream)',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'serif'],
        'sans': ['var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        'content': '72ch',
      },
    },
  },
  plugins: [],
}

export default config