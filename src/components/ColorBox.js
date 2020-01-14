import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import '../styles/ColorBox.css'

export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {copied: false}
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        });
    }

    render() {
        const {name, background} = this.props;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background: background}}className="ColorBox">
                <div style={{background: background}}className={this.state.copied ? "copy-overlay show" : "copy-overlay"}></div>
                 <div className={this.state.copied ? "copy-msg show" : "copy-msg"}>
                     <h1 className="">Copied!</h1>
                     <p>{this.props.background}</p>
                 </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-btn">Copy</button>
                    </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
