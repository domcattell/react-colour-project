import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import PaletteMetaForm from './PaletteMetaForm';
import useStyles from '../styles/PaletteFormNavStyles'
import TuneIcon from '@material-ui/icons/Tune';


function PaletteFormNav(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        newPaletteName: "",
        formShowing: false
    })

    const showSaveForm = () => {
        setState({...state, formShowing: true})
    }

    const hideSaveForm = () => {
        setState({...state, formShowing: false})
    }

    const {open, handleSubmit, palettes, handleDrawerOpen} = props;
    const {formShowing} = state;

    return (
    <div className={classes.root}>
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
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}>
                    <TuneIcon />
                </IconButton>

                <Typography variant="h6" noWrap>
                    Create Palette
                </Typography>

            </Toolbar>
            <div className={classes.navBtns}>
                <Link to="/">
                    <Button className={classes.btn} variant="contained" color="primary">Go Back</Button>
                </Link>
                <Button className={classes.btn} variant="contained" color="secondary" onClick={showSaveForm}>
                Save
                </Button>
            </div>

        </AppBar>
        {formShowing && (<PaletteMetaForm hideForm={hideSaveForm} palettes={palettes} handleSubmit={handleSubmit}/>) }
    </div>
    );
}

export default PaletteFormNav;
