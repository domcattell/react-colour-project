import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Pallete from './components/Pallete';
import seedColors from './seedColors';
import {generatePallete} from './colorHelpers';

export class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render{() => }/>
                    <Route exact path="/pallete/:id/" render{() => }/>
                </Switch>
                <Pallete pallete={generatePallete(seedColors[5])}/>
            </div>
        );
    }
}

export default App;
