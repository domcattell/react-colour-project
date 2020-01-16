import React, { Component } from 'react';
import ColorBox from './ColorBox';
import "../styles/Pallete.css"

export class SingleColourPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colourId)
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

    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false}/>
        ))
        return (
            <div className="Pallete">
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default SingleColourPalette;
