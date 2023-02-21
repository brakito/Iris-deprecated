import React, { useState } from 'react'
import Icon from '../icons'

function LockButton () {
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
      className='actionButton lockButton'
      onClick={handleLock}
    >
      {
    locked
      ? <Icon name='done' classes='actionIcon lockIcon' />
      : <Icon name='lock' classes='actionIcon lockIcon' />
  }
    </button>
  )
}

export default LockButton
