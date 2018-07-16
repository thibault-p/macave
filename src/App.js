import React, { Component } from 'react';

import './App.css';
import BottleList from './js/components/bottle-list/BottleList'
import BottleDetails from './js/components/bottle-details/BottleDetails';


class App extends Component {

  render() {
    return (
        <div className="App">
          <BottleList />
          <BottleDetails />
        </div>
    );
  }
}

export default App;
