import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Modal from '../Modal'
import Button from '../Button'
import StarList from '../StarList'
import NumberChipList from '../NumberChipList'
import './PlayNineLayout.css'

function playNineLayout(props) {
  const {
    starsQty,
    selectedChips,
    numberChips,
    refreshCount,
    modalType,
    modalOpen,
    selectedChipClick,
    numberChipClick,
    refreshClick,
    submitClick,
    play
  } = props

  const maxWidth = '600px'

  return (
    <Grid className="PlayNineLayout" container justify="center">
      <Modal open={ modalOpen } modalType={ modalType } onClose={ play }/>
      <Grid
        item
        container
        direction="column"
        justify="space-between"
        style={{ maxWidth }}
      >
        <StarList quantity={ starsQty }/>
        <Grid container
          direction="column"
          justify="space-between"
          style={{ height: '64%' }}
        >
          <NumberChipList
            numberChips={ selectedChips }
            chipClick={ selectedChipClick }
          />
          <Grid container justify="space-around">
            <Button
              onClick={ refreshCount === 0? play : refreshClick }
            >
              { refreshCount === 0?
                'RESET' :
                <div>
                  <span style={{verticalAlign: 'super'}}>{ refreshCount }</span>
                  <Icon>refresh</Icon>
                </div>
              }
            </Button>
            <Button onClick={ submitClick }>
              <Icon>check</Icon>
            </Button>
          </Grid>
          <NumberChipList
            numberChips={ numberChips }
            chipClick={ numberChipClick }
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

playNineLayout.propTypes = {
  starsQty: PropTypes.number,
  selectedChips: PropTypes.array.isRequired,
  numberChips: PropTypes.array.isRequired,
  refreshCount: PropTypes.number.isRequired,
  modalType: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  selectedChipClick: PropTypes.func,
  numberChipClick: PropTypes.func,
  refreshClick: PropTypes.func.isRequired,
  submitClick: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired
}

export default playNineLayout
