import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import NumberChip from '../NumberChip'
import './NumberChipList.css'

function numberChipList({ numberChips, chipClick }) {
  return (
    <div className="NumberChipList">
      <Card>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ minHeight: '70px' }}
        >
          {numberChips.map((chip, id) =>
            <Grid item key={ id } style={{ width: '20%' }}>
              <NumberChip
                number={ chip.number }
                inUse={ !!chip.inUse }
                used={ !!chip.used }
                clickHandler={ chipClick }
              />
            </Grid>
          )}
        </Grid>
      </Card>
    </div>
  )
}

numberChipList.propTypes = {
  numberChips: PropTypes.array
}

export default numberChipList
