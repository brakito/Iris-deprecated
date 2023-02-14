import React, { useState } from 'react'
import { useBgDarknessVerify } from '../hooks/useBgDarknessVerify'

function Color ({ color }) {
  const TagColorText = useBgDarknessVerify(color)
  const colorStyle = {
    background: '#' + color,
    color: '#' + TagColorText
  }

  const tag = {
    opacity: '0.7',
    margin: 0
  }

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color)
      setCopied(true)
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className='color' style={colorStyle}>
      <h2 style={tag}>{color}</h2>
      <button className='copyButton' onClick={handleCopy}>
        {copied ? "copied!" : "click to copy"}
      </button>
    </div>
  )
}

export default Color
