import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';
 
export class PaletteList extends Component {
    render() {
        const {palettes} = this.props;
        const routePath = "/palette/"
        return (
            <div>
                <MiniPalette />
                <h1>React Colours</h1>
                {palettes.map(palette => (
                    <Link to={`${routePath}${palette.id}`}>{palette.paletteName}</Link>
                ))}
            </div>
        );
    }
}

export default PaletteList;
