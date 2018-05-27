import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '../Card';
import NumberChip from '../NumberChip'
import './NumberChipList.css'

function numberChipList(props) {
  const numberChips = [
    { number: 1 },
    { number: 2 },
    { number: 3, inUse: true },
    { number: 4, used: true },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 }
  ]

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

export default numberChipList
