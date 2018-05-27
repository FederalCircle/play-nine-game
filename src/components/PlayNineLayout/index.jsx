import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Button from '../Button'
import StarList from '../StarList'
import NumberChipList from '../NumberChipList'

function playNineLayout(props) {
  const {
    starsQty,
    selectedChips,
    numberChips
  } = props

  return (
    <Grid container direction="column" justify="space-between">
      <StarList quantity={ starsQty }/>
      <Grid container
        direction="column"
        justify="space-between"
        style={{ height: '64%' }}
      >
        <NumberChipList numberChips={ selectedChips }/>
        <Grid container justify="space-around">
          <Button>
            <span>5</span>
            <Icon>refresh</Icon>
          </Button>
          <Button>
            <Icon>check</Icon>
          </Button>
        </Grid>
        <NumberChipList numberChips={ numberChips }/>
      </Grid>
    </Grid>
  )
}

playNineLayout.propTypes = {
  starsQty: PropTypes.number,
  selectedChips: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    inUse: PropTypes.bool,
    used: PropTypes.bool,
    clickHandler: PropTypes.func
  })).isRequired,
  numberChips: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    inUse: PropTypes.bool,
    used: PropTypes.bool,
    clickHandler: PropTypes.func
  })).isRequired
}

export default playNineLayout
