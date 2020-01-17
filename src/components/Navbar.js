import React, { Component } from 'react';
import Slider, {Range} from 'rc-slider';
import {Link} from 'react-router-dom'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css'

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {format: "hex", open: false}
        this.changeFormat = this.changeFormat.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    changeFormat(e) {
        this.setState({format: e.target.value, open: true}, () => {
            setTimeout(() => {
                this.setState({open: false})
            }, 2000)
        })
        this.props.changeFormat(e.target.value);
    }

    closeSnackbar() {
        this.setState({open: false})
    }

    render() {
        const {level, changeLevel, showingAllColours} = this.props;
        const {format} = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to="/">React Colour Picker</Link>
                </div>
                {showingAllColours && (
                <div className="slider-container">
                    <span className="slider-level">{level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100}/>
                    </div>
                </div>
                )}
                <div className="select-container">
                    <Select className="select-items" value={format} onChange={this.changeFormat}>
                        <MenuItem value="hex">HEX</MenuItem>
                        <MenuItem value="rgb">RGB</MenuItem>
                        <MenuItem value="rgba">RGBA</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="msg-id">Format changed to {format.toUpperCase()}</span>}
                    ContentProps={{"aria-describedby": "msg-id"}}
                    action={[<IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close"><CloseIcon /></IconButton>]}
                    onClose={this.closeSnackbar} >
                </Snackbar>
            </header>
        );
    }
}

export default Navbar;
