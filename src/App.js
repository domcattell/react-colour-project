import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './components/Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import { Divider } from '@material-ui/core';

export class App extends Component {
    findPalette(id) {
            return seedColors.find((palette) => {
                return palette.id === id;
            })
    }
    
    render() {
        return (
            <div>
                <Switch>
                    <Route 
                        exact 
                        path="/palette/:id" 
                        render={routeProps => 
                            (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
                        )}
                    />
                </Switch>
         </div>
           
        );
    }
}

export default App;
