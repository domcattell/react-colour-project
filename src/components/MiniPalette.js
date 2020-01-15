import React from 'react';
import {withStyles} from '@material-ui/styles';

const styles = {
    main: {
        background: "purple",
        border: "3px solid teal"
    }
}

function MiniPalette(props) {
    return(
        <div>
            <h1 className={props.classes.main}>sdfsdfsf</h1>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);