import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import PlayNineLayout from '../../components/PlayNineLayout'
import './App.css'

function random(min = 0, max = 1) {
  return min + Math.floor(Math.random() * max)
}

function evaluateWin(numberChips) {
  const usedChipsCount = numberChips
    .filter(chip => {
      return chip.used
    }).length
  return usedChipsCount === 10
}

class App extends Component {
  state = {
    starsQty: random(1, 10), // Random (1~10)
    numberChips: [...Array(10)].map( (v,k) => ({ number: k+1 }) ), // [1,2..10]
    selectedChips: [],
    refreshCount: 5,
    modalType: 'start',
    modalOpen: true
  }

  play = () => {
    this.setState({
      starsQty: random(1, 10), // Random (1~10)
      numberChips: [...Array(10)].map( (v,k) => ({ number: k+1 }) ), // [1,2..10]
      selectedChips: [],
      refreshCount: 5,
      modalType: 'start',
      modalOpen: false
    })
  }

  numberChipClick = (number) => {
    const numberChips = [...this.state.numberChips]
    const selectedChips = [...this.state.selectedChips]
    const numberRef = numberChips[number - 1]

    if ( !numberRef.inUse && selectedChips.length < 5 ) {
      numberRef.inUse = true
      selectedChips.push({ number })
      selectedChips.sort((a,b) => a.number - b.number)

      this.setState({
        numberChips,
        selectedChips
      })
    }
  }

  selectedChipClick = (number) => {
    const numberChips = [...this.state.numberChips]
    const selectedChips = [...this.state.selectedChips]
    const indexToRemove = selectedChips.map(e => e.number).indexOf(number)

    numberChips[number - 1].inUse = false
    selectedChips.splice(indexToRemove, 1)

    this.setState({
      numberChips,
      selectedChips
    })
  }

  refreshClick = () => {
    let refreshCount = this.state.refreshCount
    if (refreshCount > 0) {
      this.setState({
        starsQty: random(1, 10),
        refreshCount: refreshCount - 1
      })
    }
  }

  submitClick = () => {
    let numberSum = 0
    this.state.selectedChips
      .forEach(chip => {
        numberSum += chip.number
      });

    if (numberSum === this.state.starsQty) {
      let selectedChips = [...this.state.selectedChips]
      const numberChips = [...this.state.numberChips]
      let { modalType, modalOpen } = this.state

      selectedChips.forEach(chip => {
        const numberChip = numberChips[chip.number - 1]
        numberChip.inUse = false
        numberChip.used = true
      })
      selectedChips = []
      if (  evaluateWin(numberChips) ) {
        modalType = 'win'
        modalOpen = true
      }

      this.setState({
        starsQty: random(1, 10),
        numberChips,
        selectedChips,
        modalType,
        modalOpen
      })
    }
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <PlayNineLayout
          numberChipClick={ this.numberChipClick }
          selectedChipClick={ this.selectedChipClick }
          refreshClick={ this.refreshClick }
          submitClick={ this.submitClick }
          play={ this.play }
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
