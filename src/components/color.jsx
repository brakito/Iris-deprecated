import React from 'react'
import { useBgDarknessVerify } from '../hooks/useBgDarknessVerify'

function Color({ color }) {
  const TagColorText = useBgDarknessVerify(color)
  const colorStyle = {
    background: '#' + color,
    color: '#' + TagColorText
  }

  const tag = {
    opacity: '0.7',
    margin: 0
  }

  return (
    <div className='color' style={colorStyle}>
      <h2 style={tag}>{color}</h2>
    </div>
  )
}

export default Color
