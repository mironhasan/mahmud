/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#0AACC7",
                "secondary": "#0490CB",
                "darkness": "#102042",
                "lightness": "#e5e6ff",
            },
            fontFamily: {
                "primary": ["'Noto Sans', sans-serif"],
                "awesome": ["'Font Awesome 5 Free'"],
				"material": ["'Material Icons'"],
            },
            lineHeight: {
                "11": "3rem",
                "12": "3.5rem",
                "13": "4rem",
                "14": "4.5rem",
                "15": "5rem",
            },
            letterSpacing: {
                "stroke": "8px",
            },
            borderWidth: {
                "3": "3px",
            },
        },
    },
    plugins: [],
}