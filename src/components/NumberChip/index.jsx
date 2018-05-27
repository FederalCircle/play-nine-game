import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'
import './NumberChip.css'

function numberChip(props) {
  const {
    number,
    inUse,
    used,
    clickHandler
  } = props

  const selfClickHandler = () => {
    !inUse &&
      !used &&
        clickHandler &&
          clickHandler(number)
  }

  const statusClass = used? 'used' : inUse? 'in-use' : ''

  return (
    <div
      className={ `NumberChip ${ statusClass }` }
      onClick={ selfClickHandler }
    >
      { used?
        <Icon>check</Icon> : number
      }
    </div>
  )
}

numberChip.propTypes = {
  number: PropTypes.number.isRequired,
  inUse: PropTypes.bool,
  used: PropTypes.bool,
  clickHandler: PropTypes.func
}

numberChip.defaultProps = {
  inUse: false,
  used: false
}

export default numberChip
