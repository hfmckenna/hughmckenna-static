module.exports = {
    content: ["./**/*.html"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        fontFamily: {
            sans: ["Radio Canada", "sans-serif"],
            serif: ["Bree Serif", "serif"],
            mono: ["Major Mono Display", "Menlo", "monospace"],
        },
        extend: {
            fontFamily: {
                display: ["Beth Ellen", "serif"],
            },
        },
    },
    plugins: [],
}
