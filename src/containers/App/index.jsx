import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import PlayNineLayout from '../../components/PlayNineLayout'
import './App.css'

class App extends Component {
  state = {
    starsQty: 1 + Math.floor(Math.random() * 10), // Random (1~10)
    numberChips: [...Array(10)].map( (v,k) => ({ number: k+1 }) ), // [1,2..10]
    selectedChips: []
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <PlayNineLayout {...this.state} />
      </div>
    );
  }
}

export default App;
