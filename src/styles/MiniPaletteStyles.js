
export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s ease",
        cursor: "pointer",

            "&:hover $deleteIcon": {
                opacity: "1"
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
    },

    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "0px",
        top: "0px",
        padding: "10px",
        zIndex: "10",
        opacity: "0",
        fontSize: "30px",
        transition: "all 0.5s ease",

        "&:hover": {
            backgroundColor: "darkred"
        }

    }
}