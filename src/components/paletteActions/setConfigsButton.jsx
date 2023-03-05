import React from 'react'
import './main.css'
import { usePalette } from '../../hooks/usePalette'
import Icon from '../icons'

function SetConfigsButton() {
  const { config, setConfig } = usePalette()

  const handleClick = () => {
    console.log(config)
  }

  return (
    <button
      className='button'
      onClick={handleClick}
      id='setConfigsButton'
    >
      <Icon name='config' classes='configIcon'/> Advanced
    </button>
  )
}

export default SetConfigsButton
