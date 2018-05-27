import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import Star from '../Star'
import './StarList.css'

function starList({ quantity }) {
  return (
    <div className="StarList">
      <Card>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: '140px' }}
        >
          {[ ...Array(quantity) ].map((value, id) =>
            <Grid item key={ id } style={{ width: '20%' }}>
              <Star />
            </Grid>
          )}
        </Grid>
      </Card>
    </div>
  )
}

starList.propTypes = {
  quantity: PropTypes.number
}

starList.defaultProps = {
  quantity: 10
}

export default starList
