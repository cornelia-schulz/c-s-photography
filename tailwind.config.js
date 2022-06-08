// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      // For the best performance and to avoid false positives,
      // be as specific as possible with your content configuration.
    ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'black': '#111111',
        'grey-light': '#d9d9d9',
      },
      fontFamily: {
        sans: ['sans-serif'],
        serif: ['proxima-nova', 'serif'],
      },
    }
};