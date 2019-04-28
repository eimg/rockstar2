import React from 'react';
import MyAppBar from './MyAppBar';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
    state = {
        drawer: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            drawer: open,
        });
    };

    render() {
        return (
            <Router>
                <div>
                    <MyAppBar toggleDrawer={this.toggleDrawer} count={4} />

                    <SwipeableDrawer
                        open={this.state.drawer}
                        onClose={this.toggleDrawer(false)}
                        onOpen={this.toggleDrawer(true)}
                    >
                        <header style={{width: 200, height: 100, background: 'gray'}}></header>
                        <List>
                            <ListItem onClick={this.toggleDrawer(false)}>
                                <Link to="/">
                                    <ListItemText primary="Home"></ListItemText>
                                </Link>
                            </ListItem>
                            <ListItem onClick={this.toggleDrawer(false)}>
                                <Link to="/about">
                                    <ListItemText primary="About"></ListItemText>
                                </Link>
                            </ListItem>
                            <ListItem onClick={this.toggleDrawer(false)}>
                                <Link to="/contact">
                                    <ListItemText primary="Contact"></ListItemText>
                                </Link>
                            </ListItem>
                        </List>
                    </SwipeableDrawer>

                    <BottomNavigation style={{position: 'absolute', bottom: 0, width: '100%'}} >
                        <Link to="/more/recents">
                            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        </Link>
                        <Link to="/more/favorite">
                            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        </Link>
                        <Link to="/more/location">
                            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                        </Link>
                    </BottomNavigation>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/more/:label" component={More} />
                </div>
            </Router>
        )
    }
}

const Home = props => <h1>Home</h1>;
const About = props => <h1>About</h1>;
const Contact = props => <h1>Contact</h1>;
const More = props => <h1>More - {props.match.params.label}</h1>;

export default App;
