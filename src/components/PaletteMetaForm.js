import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'


export default function PaletteMetaForm(props) {
  const [state, setState] = React.useState({
    stage: "form",
    newPaletteName: ""
  });

  const {handleSubmit, hideForm} = props;


  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const changeStage = () => {
    setState({...state, stage: "emoji"})
  }

  const savePalette = (emoji) => {
    const newPalette = {
      paletteName: state.newPaletteName, 
      emoji: emoji.native
    }
    handleSubmit(newPalette)
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return props.palettes.every(
          ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
        );
      });
    });

  return (
    <div>
      <Dialog onClose={hideForm} open={state.stage === "emoji"}>
        <DialogTitle id="form-dialog-title">Enter Your Palette Name</DialogTitle>
        <Picker title="Pick Palette Emoji" emoji="point_up" darkMode={false} onSelect={savePalette} />
      </Dialog>

      <Dialog open={state.stage === "form"} onClose={hideForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
        <ValidatorForm onSubmit={changeStage}>
        <DialogContent>
          <DialogContentText>
            Enter a name for your palette and make it unique.
          </DialogContentText>
        
                    <TextValidator 
                        label="Palette Name" 
                        onChange={handleChange} 
                        fullWidth
                        value={state.newPaletteName} 
                        name="newPaletteName"
                        validators={["required", "isPaletteNameUnique"]}
                        errorMessages={("This field is required", "This name is taken")}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="secondary" type="submit">Save Palette</Button>
        </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}