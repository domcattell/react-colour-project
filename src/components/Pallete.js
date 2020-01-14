import React, { Component } from 'react';
import ColorBox from './ColorBox'
import '../styles/Pallete.css'

export class Pallete extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name}/>
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

export default Pallete;
