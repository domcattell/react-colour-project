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
import DraggableColourList from './DraggableColourList'
import { arrayMove } from 'react-sortable-hoc';

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

export default function NewPaletteForm(props) {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(true);
    // const [currColour, setCurrColour] = React.useState("teal")
    // const [colours, setColours] = React.useState([]);
    // const [newName, setNewName] = React.useState("");
    // const [newPaletteName, setNewPaletteName] = React.useState("")

    const [state, setState] = React.useState({
      open: true,
      currColour: "blue",
      colours: [],
      newName: "",
      newPaletteName: ""
    })
  
    const handleDrawerOpen = () => {
      setState({...state, open: true});
    };

    const updateCurrentColour = (newColor) => {
        setState({...state, currColour: newColor.hex})
    }
  
    const handleDrawerClose = () => {
      setState({...state, open: false});
    };
  
    const addNewColour = () => {
        const newColour = {
            color: state.currColour,
            name: state.newName
        }
        setState({
          ...state, 
          colours: [...state.colours, newColour], 
          newName: "", 
        })
    }

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
      let newName= state.newPaletteName
      const newPalette = {
        paletteName: newName,
        id: newName.toLowerCase().replace(/ /g, "-"),
        colors: state.colours

      }
        props.savePalette(newPalette)
        props.history.push("/")
    }

    const removeColour = (colourName) => {
        setState({
          ...state,
          colours: state.colours.filter(colour => colour.name !== colourName) 
        })
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
      setState({...state, colours: arrayMove(state.colours, oldIndex, newIndex)})
    }

    React.useEffect(() => {
      ValidatorForm.addValidationRule("isColourNameUnique", value => {
        return state.colours.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        );
      });

      ValidatorForm.addValidationRule("isColourUnique", value => {
        return state.colours.every(
          ({ colour }) => colour !== state.currColour
        );
      });

      ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
        return props.palettes.every(
          ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
        );
      });
    });

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: state.open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>
            <ValidatorForm onSubmit={handleSubmit}>
              <TextValidator 
                label="Palette Name" 
                onChange={handleChange} 
                value={state.newPaletteName} 
                name="newPaletteName"
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={("This field is required", "Name already exists")}
                />
              <Button variant="contained" color="primary" type="submit">Save Palette</Button>
            </ValidatorForm>
            

          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={state.open}
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
          <SketchPicker color={state.currColour} onChangeComplete={updateCurrentColour}/>
          <ValidatorForm onSubmit={addNewColour}>
              <TextValidator 
                value={state.newName}
                name="newName"
                onChange={handleChange}
                validators={["required", "isColourNameUnique", "isColourUnique"]}
                errorMessages={["this field is required", "Colour name already in use", "Colour already used"]}
              />
              <Button variant="contained" color="primary" style={{backgroundColor: state.currColour}} type="submit">Add Colour</Button>
          </ValidatorForm>
          
         
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: state.open,
          })}
        >
          <div className={classes.drawerHeader} />
            <DraggableColourList 
              colours={state.colours} 
              removeColour={removeColour}
              axis="xy"
              onSortEnd={onSortEnd}
            />
        </main>
      </div>
    );
  }
