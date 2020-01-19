import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyles';

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