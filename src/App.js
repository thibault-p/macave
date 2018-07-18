import React, { Component } from 'react';

import './App.css';
import BottleList from './js/components/bottle-list/BottleList'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottleDetails from './js/components/bottle-details/BottleDetails';


class App extends Component {

  render() {
    return (
        <div className="App">
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                MaCave
              </Typography>
            </Toolbar>
          </AppBar>
          <BottleList />
          <BottleDetails />
        </div>
    );
  }
}

export default App;
