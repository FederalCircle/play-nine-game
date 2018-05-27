import React from 'react'
import Button from '@material-ui/core/Button'
import './Button.css'

const button = (props) => <Button className="Button" {...props}>{ props.children }</Button>

button.defaultProps = {
  variant: 'raised',
  color: 'primary',
  style: { backgroundColor: '#009688' }
}

export default button
