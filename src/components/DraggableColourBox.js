import React, { Component } from 'react';
import {withStyles, withTheme} from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc'
import styles from '../styles/DraggableColourBoxStyles'

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

