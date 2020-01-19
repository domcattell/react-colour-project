import chroma from 'chroma-js'

export default {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-4px",

        "&:hover button": {
            opacity: "1"
        } 
    },

    copyText: {
        color: props => chroma(props.background).luminance() >= 0.5 ? "black" : "white"
    },

    colourName: {
        color: props => chroma(props.background).luminance() <= 0.09 ? "white" : "black"
    },

    seeMore: {
        background: "rgba(255, 255, 255, 0.3)",
        color: props => chroma(props.background).luminance() >= 0.5 ? "black" : "white",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px"
    },

    copyBtn: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        lineHeight: "30px",
        color: props => chroma(props.background).luminance() >= 0.5 ? "black" : "white",
        textTransform: "uppercase",
        border: "none",
        opacity: "0",
        transition: "all 0.4s ease",
        cursor: "pointer"
    },

    boxContent: {
        position: "absolute",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        fontSize: "12px",
        padding: "10px"
    },

    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.5s ease",
        transform: "scale(0.1)"
    },

    showOverlay: {
        opacity: "1",
        transform: "scale(9)",
        zIndex: "10",
        position: "absolute"
    },

    copyMsg: {
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        flexDirection: "column",
        transition: "all 0.5s ease",

            "& h1": {
                fontWeight: "400",
                textShadow: "1px 2px black",
                background: "rgba(255, 255, 255, 0.3)",
                width: "100%",
                textAlign: "center",
                padding: "1rem",
                marginBottom: "0"
            },

            "& p": {
                fontSize: "2rem",
                fontWeight: "100"
            },
    },

    copyMsgShow: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transitionDelay: "0.2s",

    }
}