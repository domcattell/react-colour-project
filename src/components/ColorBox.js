import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import chroma from 'chroma-js'
import '../styles/ColorBox.css'
import {Link} from 'react-router-dom'

export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {copied: false}
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1000)
        });
    }

    render() {
        const {name, background, id, paletteId, showLink} = this.props;
        const isDarkColour = chroma(background).luminance() <= 0.09;
        const isLightColour = chroma(background).luminance() >= 0.5;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background: background}}className="ColorBox">
                <div style={{background: background}}className={this.state.copied ? "copy-overlay show" : "copy-overlay"}></div>
                 <div className={this.state.copied ? "copy-msg show" : "copy-msg"}>
                     <h1 className="">Copied!</h1>
                     <p className={isLightColour && "dark-text"}>{this.props.background}</p>
                 </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColour && "light-text"}>{name}</span>
                        </div>
                        <button className="copy-btn">Copy</button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLightColour && "dark-text"}`}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
