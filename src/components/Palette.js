import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import ColorBox from './ColorBox'
import '../styles/Pallete.css'

export class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({level});
    }

    changeFormat(value) {
        this.setState({format: value})
    }

    render() {
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} showLink={true}/>
        ))
        return (
            <div className="Pallete">
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} showingAllColours={true}/>
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
                <Footer paletteName={paletteName} emoji={emoji}/>
            </div>
        );
    }
}

export default Palette;
