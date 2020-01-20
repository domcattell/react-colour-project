export default {
    slider: {
        width: "340px",
        margin: "0",
        display: "inline-block",

            "& .rc-slider-rail": {
                height: "8px"
            },

            "& .rc-slider-track": {
                background: "transparent"
            },
            
            "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle": {
                background: "green",
                border: "2px solid green",
                boxShadow: "none",
                outline: "none",
                marginLeft: "-7px",
                marginTop: -"3px",
                width: "13px",
                height: "13px"
            },
    },

    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh"
    },
    
    logo: {
        height: "100%",
        background: "#3e5a74",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        marginRight: "15px",

        "& a": {
            textDecoration: "none",
            color: "white",
            textTransform: "uppercase",
            fontWeight: "400",
            fontSize: "24px"
        },
    },
    
    sliderLevel: {
        marginRight: "25px",
        fontSize: "18px",
        fontWeight: "500"
    },
    
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
        color: "white"
    }
}