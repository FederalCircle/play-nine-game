import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import './Card.css'

function card(props) {
  return (
    <Card className="Card">
      { props.children }
    </Card>
  )
}

card.propTypes = {
  children: PropTypes.node.isRequired
}

export default card
