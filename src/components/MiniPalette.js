import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete'

const MiniPalette = React.memo((props) => {
    const {classes, paletteName, emoji, colors} = props;

    const deletePalette = (e) => {
        e.stopPropagation();
        props.openDialogue(props.id)
    }

    const handleClick = () => {
        props.goToPalette(props.id)
    }

    return(
        <div className={classes.root} onClick={handleClick}>
            <DeleteIcon className={classes.deleteIcon} onClick={deletePalette}/>
            <div className={classes.colours}>
                {colors.map(color => (
                    <div className={classes.colour} style={{backgroundColor: color.color}} key={color.name}></div>
                ))}
            </div>
            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
})

export default withStyles(styles)(MiniPalette);