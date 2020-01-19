export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",

            "&:hover": {
                cursor: "pointer",
                backgroundColor: "#2e4357",
                color: "#edeef2"
            }
    },

    colours: {
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },

    colour: {
        width: "20%",
        height: "25%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px"
    },

    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },

    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    }
};