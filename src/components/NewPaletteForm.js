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
import ColourPickerForm from './ColourPickerForm';
import {withStyles} from '@material-ui/styles';
import useStyles from '../styles/NewPaletteFormStyles'

NewPaletteForm.defaultProps = {
  maxColours: 20
}

export default function NewPaletteForm(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
      open: true,
      currColour: "blue",
      colours: props.palettes[0].colors,
    })
  
    const handleDrawerOpen = () => {
      setState({...state, open: true});
    };
  
    const handleDrawerClose = () => {
      setState({...state, open: false});
    };
  
    const addNewColour = (newColour) => {
        setState({
          ...state, 
          colours: [...state.colours, newColour], 
          newName: "", 
        })
    }

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (newPalette) => {
      newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
      newPalette.colors = state.colours
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

    const clearColours = () => {
      setState({...state, colours: []})
    }

    const addRandomColour = () => {
      const allColours = props.palettes.map(p => p.colors).flat();
      let rand = Math.floor(Math.random() * allColours.length);
      const randomColour = allColours[rand];
      setState({...state, colours: [...state.colours, randomColour]})
    }

    const paletteIsFull = state.colours.length >= props.maxColours;

    return (
      <div className={classes.root}>
        <PaletteFormNav open={state.open} palettes={props.palettes} handleSubmit={handleSubmit} handleDrawerOpen={handleDrawerOpen}/>
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

          <div className={classes.drawerContainer}>
            <Typography variant="h4" gutterBottom>Design Your Palette</Typography>

            <div className={classes.btns}>
              <Button className={classes.btn} variant="contained" color="primary" onClick={addRandomColour} disabled={paletteIsFull}>Random Colour</Button>
              <Button className={classes.btn} variant="contained" color="secondary" onClick={clearColours}>Clear Palette</Button>
            </div>

            <ColourPickerForm paletteIsFull={paletteIsFull} addNewColour={addNewColour} colours={state.colours}/>
          </div>

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
