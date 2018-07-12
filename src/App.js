import React, { Component } from 'react';
import './App.css';
import BottleList from './js/components/bottle-list/BottleList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <BottleList />
      </div>
    );
  }
}

export default App;
