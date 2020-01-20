import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList'
import SingleColourPalette from './components/SingleColourPalette'
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';
import { Divider } from '@material-ui/core';
import NewPaletteForm from './components/NewPaletteForm';

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
                    <Route exact path="/palette/new" render={() => <NewPaletteForm />}/>
                    <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />}/>
                    <Route 
                        exact 
                        path="/palette/:paletteId/:colourId" 
                        render={routeProps => 
                            (<SingleColourPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} colourId={routeProps.match.params.colourId}/>
                        )}
                    />
                    <Route 
                        exact 
                        path="/palette/:id" 
                        render={routeProps => 
                            (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
                        )}/>
                </Switch>
         </div>
           
        );
    }
}

export default App;
