import React, { useState } from 'react'
import Icon from '../icons'

function CopyButton ({ textToCopy, theme }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      className={'actionButton copyButton ' + theme}
      onClick={handleCopy}
    >
      {
      copied
        ? <Icon name='done' classes='actionIcon copyIcon' />
        : <Icon name='copy' classes='actionIcon copyIcon' />
    }
    </button>
  )
}

export default CopyButton
