import React, { Component } from 'react';
import {withStyles, withTheme} from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc'

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-4px",

            "&:hover svg": {
                color: "white",
                transform: "scale(1.4)"
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

const DraggableColourBox = SortableElement((props) => {
    const {classes, handleClick, name, colour} = props;

    return (
        <div className={classes.root} style={{backgroundColor: colour}}>
            <div className={classes.boxContent}>
                <span> {name} </span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColourBox);

