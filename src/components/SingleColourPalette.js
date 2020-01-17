import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer'
import {Link} from 'react-router-dom'
import "../styles/Pallete.css"
import "../styles/ColorBox.css"

export class SingleColourPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colourId)
        this.state = {format: "hex"}
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(palette, colourToFilterBy) {
        let shades = [];
        let allColours = palette.colors;
        for (let key in allColours) {
            shades = shades.concat(
                allColours[key].filter(colour => colour.id === colourToFilterBy)
            )
        }
        return shades.slice(1);
    }

    changeFormat(value) {
        this.setState({format: value})
    }

    render() {
        const {format} = this.state;
        const {paletteName, emoji, id} = this.props.palette;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false}/>
        ))
        return (
            <div className="SingleColour Pallete">
                <Navbar changeFormat={this.changeFormat} showingAllColours={false}/>
                <div className="Pallete-colors">
                    {colorBoxes}
                    <Link className="go-back ColorBox" to={`/palette/${id}`}>
                        <span className="back-btn">Go Back</span>
                    </Link>
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColourPalette;
