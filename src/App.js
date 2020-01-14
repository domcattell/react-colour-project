import React, { Component } from 'react';
import Pallete from './components/Pallete'
import seedColors from './seedColors'

export class App extends Component {
    render() {
        return (
            <div>
                <Pallete {...seedColors[4]}/>
            </div>
        );
    }
}

export default App;
