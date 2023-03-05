import React, { useState } from 'react'
import Icon from '../icons/index'

function PickButton({ theme }) {
  const [locked, setLocked] = useState(false)

  const handleLock = () => {
    try {
      setLocked(true)
      setTimeout(() => setLocked(false), 1000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      className={'actionButton PickButton ' + theme}
      onClick={handleLock}
    >
      {
        locked
          ? <Icon name='done' classes='actionIcon pickIcon' />
          : <Icon name='pick' classes='actionIcon pickIcon' />
      }
    </button>
  )
}

export default PickButton
