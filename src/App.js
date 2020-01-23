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
    constructor(props) {
        super(props);
        const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
        this.state = {palettes: savedPalettes || seedColors};
        this.savePalette = this.savePalette.bind(this);
        this.findPalette = this.findPalette.bind(this);
        this.deletePalette = this.deletePalette.bind(this);
    }

    findPalette(id) {
        return this.state.palettes.find((palette) => {
            return palette.id === id;
        })
    }

    deletePalette(id) {
        this.setState(
            st => ({palettes: st.palettes.filter(palette => palette.id !== id)}),
            this.syncLocalStorage
        )
    }
    
    savePalette(newPalette) {
        this.setState({palettes: [...this.state.palettes, newPalette]}, 
            this.syncLocalStorage)
    }

    syncLocalStorage() {
        window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps}/>}/>
                    <Route exact path="/" render={(routeProps) => <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />}/>
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
