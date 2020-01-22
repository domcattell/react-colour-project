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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px",

      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },

      navBtns: {
        marginRight: "1rem",
        display: "flex",
        alignItems: "center",

        "& a": {
            textDecoration: "none"
        }
      },

      btn: {
        margin: "0 0.5rem"
      }
}));

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

    const {open, handleSubmit, palettes} = props;

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
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
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
        {state.formShowing && (<PaletteMetaForm hideForm={hideSaveForm} palettes={palettes} handleSubmit={handleSubmit}/>) }
    </div>
    );
}


export default PaletteFormNav;
