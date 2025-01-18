/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary)', // Main purple color
                    light: 'var(--color-primary-light)', // Lighter shade
                    dark: 'var(--color-primary-dark)', // Darker shade
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)', // Complementary color
                },
                background: {
                    DEFAULT: 'var(--color-background)', // Main white background
                    dark: 'var(--color-background-dark)', // Background for dark mode
                },
                text: {
                    DEFAULT: 'var(--color-text)', // Text color
                    muted: 'var(--color-text-muted)', // Muted text color
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
