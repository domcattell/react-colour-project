import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button'
import {SketchPicker} from 'react-color';
import DraggableColourBox from './DraggableColourBox';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NewPaletteForm() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [currColour, setCurrColour] = React.useState("teal")
    const [colours, setColours] = React.useState([]);
    const [newName, setNewName] = React.useState("");
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const updateCurrentColour = (newColor) => {
        setCurrColour(newColor.hex)
    }
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const addNewColour = () => {
        const newColour = {
            colour: currColour,
            name: newName
        }
        setColours([...colours, newColour]);
        setNewName("");
        setCurrColour("black")
    }

    const handleChange = (e) => {
        setNewName(e.target.value)
    }

    React.useEffect(() => {
      ValidatorForm.addValidationRule("isColourNameUnique", value => {
        return colours.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        );
      });

      ValidatorForm.addValidationRule("isColourUnique", value => {
        return colours.every(
          ({ colour }) => colour !== currColour
        );
      });
    });

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />

          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button variant="contained" color="primary">Random Colour</Button>
            <Button variant="contained" color="secondary">Clear Palette</Button>
          </div>
          <SketchPicker color={currColour} onChangeComplete={updateCurrentColour}/>
          <ValidatorForm onSubmit={addNewColour}>
              <TextValidator 
                value={newName}
                onChange={handleChange}
                validators={["required", "isColourNameUnique", "isColourUnique"]}
                errorMessages={["this field is required", "Colour name already in use", "Colour already used"]}
              />
              <Button variant="contained" color="primary" style={{backgroundColor: currColour}} type="submit">Add Colour</Button>
          </ValidatorForm>
          
         
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            {colours.map(colour => (
                <DraggableColourBox colour={colour.colour} name={colour.name}/>
            ))}
        
        </main>
      </div>
    );
  }
