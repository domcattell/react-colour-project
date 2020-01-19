import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/styles';
import styles from '../styles/PaletteStyles'

class SingleColourPalette extends Component {
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
        const {classes} = this.props;
        
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false}/>
        ))
        return (
            <div className={classes.Palette}>
                <Navbar changeFormat={this.changeFormat} showingAllColours={false}/>
                <div className={classes.paletteColors}>
                    {colorBoxes}
                    <Link className={classes.goBack} to={`/palette/${id}`}>
                        <span className={classes.backBtn}>Go Back</span>
                    </Link>
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColourPalette);
