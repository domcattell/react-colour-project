import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
import styles from '../styles/PaletteListStyles'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Dialog from '@material-ui/core/Dialog';
import List from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import DialogTitle from '@material-ui/core/DialogTitle';

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialogue: false,
            deletingId: ""
        }
        this.openDialogue = this.openDialogue.bind(this);
        this.closeDialogue = this.closeDialogue.bind(this);
        this.finaliseDelete = this.finaliseDelete.bind(this);
        this.gotToPalette = this.gotToPalette.bind(this);
    }

    openDialogue(id) {
        this.setState({openDeleteDialogue: true, deletingId: id})
    }

    closeDialogue() {
        this.setState({openDeleteDialogue: false, deletingId: ""})
    }

    gotToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    finaliseDelete() {
        this.props.deletePalette(this.state.deletingId);
        this.closeDialogue();
    }

    render() {
        const {palettes, classes} = this.props;
        const {openDeleteDialogue} = this.state;
        
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colours</h1>
                        <Button variant="contained">
                            <Link to="/palette/new">Create Palette</Link>
                        </Button>
                        <Button variant="contained" onClick={this.props.reset}>Reset</Button>
                    </nav>
                   
                        <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                             <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                                <MiniPalette openDialogue={this.openDialogue} closeDialogue={this.closeDialogue} {...palette} key={palette.id} id={palette.id} /* handleDelete={this.props.deletePalette} */ goToPalette={this.gotToPalette}/>
                             </CSSTransition>
                        ))}
                        </TransitionGroup>
                    
                </div>
                <Dialog onClose={this.closeDialogue} open={openDeleteDialogue} aria-labelledby="delete-dialogue-title">
                    <DialogTitle id="delete-dialogue-title">Delete Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.finaliseDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: "red"}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Delete
                            </ListItemText>
                        </ListItem>

                        <ListItem button onClick={this.closeDialogue}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: "lightblue"}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Cancel
                            </ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);
