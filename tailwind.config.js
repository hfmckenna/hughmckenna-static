module.exports = {
    content: ["./src/**/*.{html,ts}","./src/index.html"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        fontFamily: {
            display: ["Stardos Stencil", "serif"],
            sans: ["Roboto Condensed", "sans-serif"]
        },
        extend: {},
    },
    plugins: [],
}
