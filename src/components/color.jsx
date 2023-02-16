import React from 'react'
import { useBgDarknessVerify } from '../hooks/useBgDarknessVerify'
import Icon from './icons'
import ColorActionsBar from './toolBar'
import { hexToHSL } from '../services/changeColorMode'

function Color({ color }) {
  const TagColorText = useBgDarknessVerify(color)
  const HSL = hexToHSL(color)
  const colorStyle = {
    background: '#' + color,
    color: '#' + TagColorText
  }

  const tag = {
    opacity: '0.7',
    margin: 0
  }

  const decoration = {
    color: '#' + TagColorText,
    opacity: '50%'
  }

  const decoracion = TagColorText == '000000' ? 'hashBlack' : 'hashWhite'

  return (
    <div className='color' style={colorStyle}>
      <Icon name='hash' classes='hashIcon' style={decoration} />
      <ColorActionsBar color={color} />
      <div className='tagContainer'>
        <h2 style={tag}>{color}</h2>
        <p style={tag}>{`${Math.round(HSL.h)}, ${Math.round(HSL.s)}, ${Math.round(HSL.l)}`}</p>
      </div>
    </div>
  )
}

export default Color
