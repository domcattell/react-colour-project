import sizes from './sizes'
import bg from './bg.svg'

export default {

    "@global": {
        ".fade-exit": {
            opacity: 1,
        },

        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 0.5s ease-out"
        }
    },

    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#415162",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        overflow: "auto"
    },

    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",

        [sizes.down("xlg")]: {
            width: "60%"
        },

    },

    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        
            "& a": {
                textDecoration: "none",
                color: "white",
    }       },

    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "1.5rem",

        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)",
        },

        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
        },

    }
}