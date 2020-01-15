import React, { Component } from 'react';
import Slider, {Range} from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css'


export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {format: "hex"}
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat(e) {
        this.setState({format: e.target.value});
        this.props.changeFormat(e.target.value);
    }

    render() {
        const {level, changeLevel, changeFormat} = this.props;
        const {format} = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">React Colour Picker</a>
                </div>
                <div className="slider-container">
                    <span className="slider-level">{level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100}/>
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.changeFormat}>
                        <MenuItem value="hex">HEX</MenuItem>
                        <MenuItem value="rgb">RGB</MenuItem>
                        <MenuItem value="rgba">RGBA</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;
