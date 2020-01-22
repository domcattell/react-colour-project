import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {Link} from 'react-router-dom'


function PaletteFormNav(props) {
    const [state, setState] = React.useState({
        newPaletteName: ""
    })

    const {classes, open, handleSubmit} = props;

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
          return props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
          );
        });
    });

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    return (
    <div>
        <CssBaseline />
        <AppBar
            color="default"
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}>

            <Toolbar>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap>
                    Create Palette
                </Typography>

                <ValidatorForm onSubmit={() => handleSubmit(state.newPaletteName)}>
                    <TextValidator 
                        label="Palette Name" 
                        onChange={handleChange} 
                        value={state.newPaletteName} 
                        name="newPaletteName"
                        validators={["required", "isPaletteNameUnique"]}
                        errorMessages={("This field is required", "Name already exists")}/>
                        <Link to="/">
                            <Button variant="contained" color="primary">Go Back</Button>
                        </Link>
                    <Button variant="contained" color="secondary" type="submit">Save Palette</Button>
                </ValidatorForm>

            </Toolbar>

        </AppBar>
    </div>
    );
}


export default PaletteFormNav;
