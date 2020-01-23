import sizes from './sizes'

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-5px",

            "&:hover svg": {
                color: "white",
                transform: "scale(1.4)"
            },

            [sizes.down("lg")]: {
                width: "25%",
                height: "20%"
            },

            [sizes.down("md")]: {
                width: "50%",
                height: "10%"
            },

            [sizes.down("md")]: {
                width: "100%",
                height: "5%"
            }
    },

    boxContent: {
        position: "absolute",
        width: "100%",
        color: "black",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        fontSize: "12px",
        padding: "10px",
        display: "flex",
        textTransform: "uppercase",
        justifyContent: "space-between"
    },

    deleteIcon: {
        transition: "all 0.5s ease",
    }
}

export default styles;