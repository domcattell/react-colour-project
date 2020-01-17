import React from 'react';
import {withStyles} from '@material-ui/styles';

const styles = {
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
}

function MiniPalette(props) {
    const {classes, paletteName, emoji, colors} = props;
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colours}>
                {colors.map(color => (
                    <div className={classes.colour} style={{backgroundColor: color.color}} key={color.name}></div>
                ))}
            </div>
            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);