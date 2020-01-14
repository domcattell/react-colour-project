import React, { Component } from 'react';
import Pallete from './components/Pallete'
import seedColors from './seedColors'
import {generatePallete} from './colorHelpers';

export class App extends Component {
    render() {
        console.log(generatePallete(seedColors[3]))
        return (
            <div>
                <Pallete {...seedColors[3]}/>
            </div>
        );
    }
}

export default App;
