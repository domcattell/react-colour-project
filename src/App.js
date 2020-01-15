import React, { Component } from 'react';
import Pallete from './components/Pallete'
import seedColors from './seedColors'
import {generatePallete} from './colorHelpers';

export class App extends Component {
    render() {
        return (
            <div>
                <Pallete pallete={generatePallete(seedColors[5])}/>
            </div>
        );
    }
}

export default App;
