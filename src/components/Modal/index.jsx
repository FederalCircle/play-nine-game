import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import Button from '../Button'
import Card from '../Card'
import './Modal.css'

function randomLabel() {
  const buttonLabels = [
    // 'Not today!',
    // 'Get over here!',
    'Hit me again!',
    // 'It\'s just a flesh wound!',
    'AGAAAAIN!',
    'Just on more time...'
  ]
  const index = 0 + Math.floor( Math.random() * (buttonLabels.length - 1) )
  return buttonLabels[index]
}

function modal(props) {
  return (
    <Modal
      className="Modal"
      open={props.open}
    >
      <Card>
        <h3>
          {
            props.modalType === 'start'? 'Play Nine Game' :
            props.modalType === 'lose'? 'You lost :(' :
            props.modalType === 'win'? 'You won!' : ''
          }
        </h3>
        <Button onClick={props.onClose}>
          { props.modalType === 'start'?
            'Start' : randomLabel()
          }
        </Button>
      </Card>
    </Modal>
  )
}

modal.propTypes = {
  open: PropTypes.bool.isRequired,
  modalType: PropTypes.oneOf(['start', 'lose', 'win']),
  onClose: PropTypes.func.isRequired
}

export default modal;
