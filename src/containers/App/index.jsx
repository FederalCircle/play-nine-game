import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarList from '../../components/StarList'
import NumberChipList from '../../components/NumberChipList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Grid container direction="column" justify="space-between">
          <Grid item>
            <StarList quantity={ 5 }/>
          </Grid>
          <Grid item>
            <NumberChipList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
