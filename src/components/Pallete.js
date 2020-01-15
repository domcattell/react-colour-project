import React, { Component } from 'react';
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import '../styles/Pallete.css'

export class Pallete extends Component {
    constructor(props) {
        super(props);
        this.state = {level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({level});
    }

    changeFormat(e) {
        this.setState({format: e})
    }

    render() {
        const {colors} = this.props.pallete;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} />
        ))
        return (
            <div className="Pallete">
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat}/>
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default Pallete;
