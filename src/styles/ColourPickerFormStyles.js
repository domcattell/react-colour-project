import { makeStyles } from '@material-ui/core/styles';
import chroma from 'chroma-js'

export default makeStyles(theme => ({
    picker: {
        width: "95% !important",
        marginTop: "2rem"
    },

    addColour: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem",
        color: "white",
    },

    colourInput: {
        width: "100%",
        height: "70px"
    }

}));