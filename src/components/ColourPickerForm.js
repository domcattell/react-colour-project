import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button'
import {SketchPicker} from 'react-color';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import DraggableColourList from './DraggableColourList'
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav'

const useStyles = makeStyles(theme => ({
    picker: {
        width: "95% !important",
        marginTop: "2rem"
    },

    addColour: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem"
    },

    colourInput: {
        width: "100%",
        height: "70px"
    }

}));

function ColourPickerForm(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        currColour: "",
        newName: ""
    })

    const {paletteIsFull, addNewColour, colours} = props

    const updateCurrentColour = (newColor) => {
        setState({...state, currColour: newColor.hex})
    }

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        const newColour = {
            color: state.currColour,
            name: state.newName
        };
        addNewColour(newColour)
        setState({newName: ""});
    }

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isColourNameUnique", value => {
            return colours.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
            );
        });

        ValidatorForm.addValidationRule("isColourUnique", value => {
            return colours.every(
            ({ colour }) => colour !== state.currColour
            );
        });
    });

    return (
        <div>
            <SketchPicker className={classes.picker} color={state.currColour} onChangeComplete={updateCurrentColour}/>
            <ValidatorForm onSubmit={handleSubmit}>
              <TextValidator 
                className={classes.colourInput}
                value={state.newName}
                variant="filled"
                name="newName"
                margin="normal"
                placeholder="Colour Name"
                onChange={handleChange}
                validators={["required", "isColourNameUnique", "isColourUnique"]}
                errorMessages={["this field is required", "Colour name already in use", "Colour already used"]}
              />
            <Button className={classes.addColour} variant="contained" color="primary" style={{backgroundColor: paletteIsFull ? "lightgrey" : state.currColour}} disabled={paletteIsFull} type="submit">{paletteIsFull ? "Palette Full" : "Add Colour"}</Button>
            </ValidatorForm>
        </div>
    );
}

export default ColourPickerForm;

