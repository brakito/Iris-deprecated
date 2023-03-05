import React from 'react'
import './main.css'
import Icon from '../icons'

function SaveBtn() {

  const handleClick = () => {
    console.log('Save!')
  }

  return (
    <button
      className='button'
      onClick={handleClick}
      id='setConfigsButton'
    >
      <Icon name='save' classes='saveIcon'/> Save
    </button>
  )
}

export default SaveBtn
