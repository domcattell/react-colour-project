import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-4px"
    }
}

function DraggableColourBox(props) {
    const {classes} = props;

    return (
        <div className={classes.root} style={{backgroundColor: props.colour}}>
            {props.name}
        </div>
    )
}

export default withStyles(styles)(DraggableColourBox);

