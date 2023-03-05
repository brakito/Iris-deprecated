import React, { useState } from 'react'
import Icon from '../icons'

function MoreButton({ theme }) {
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
      className={'actionButton moreButton ' + theme}
      onClick={handleLock}
    >
      {
        locked
          ? <Icon name='done' classes='actionIcon moreIcon' />
          : <Icon name='more' classes='actionIcon moreIcon' />
      }
    </button>
  )
}

export default MoreButton
