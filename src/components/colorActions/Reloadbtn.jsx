import React, { useState } from 'react'
import Icon from '../icons'

function ReloadButton({ theme }) {
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
      className={'actionButton reloadButton ' + theme}
      onClick={handleLock}
    >
      {
        locked
          ? <Icon name='done' classes='actionIcon reloadIcon' />
          : <Icon name='reload' classes='actionIcon reloadIcon' />
      }
    </button>
  )
}

export default ReloadButton
