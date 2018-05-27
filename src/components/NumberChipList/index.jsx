import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import NumberChip from '../NumberChip'
import './NumberChipList.css'

function numberChipList({ numberChips }) {
  return (
    <div className="NumberChipList">
      <Card>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: '140px' }}
        >
          {numberChips.map((chip, id) =>
            <Grid item key={ id } style={{ width: '20%' }}>
              <NumberChip
                number={ chip.number }
                inUse={ !!chip.inUse }
                used={ !!chip.used }
                clickHandler={ (n) => console.log(n) }
              />
            </Grid>
          )}
        </Grid>
      </Card>
    </div>
  )
}

numberChipList.propTypes = {
  numberChips: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    inUse: PropTypes.bool,
    used: PropTypes.bool,
    clickHandler: PropTypes.func
  }))
}

export default numberChipList
