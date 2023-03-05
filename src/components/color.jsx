import React from 'react'
import { isDarkness } from '../services/VerifyColorIsDarkness'
import ColorActionsBar from './toolBar'
import { hexToCMYK, hexToHSL, hexToRGB } from '../services/changeColorMode'

function Color ({ color }) {
  const TagColorText = isDarkness(color) ? 'fff' : '000'
  const ColorStatus = 'LOCKED'
  
  const HSL = hexToHSL(color)
  const CMYK = hexToCMYK(color)
  const RGB = hexToRGB(color)

  const colorStyle = {
    background: '#' + color,
    color: '#' + TagColorText
  }

  const tag = {
    opacity: '0.9',
    margin: 0
  }

  const span = {
    fontWeight: '600',
    opacity: '0.9'
  }

  return (
    <div className='color' style={colorStyle}>
      <span style={span}>{ColorStatus}</span>
      <ColorActionsBar color={color} theme={TagColorText == 'fff' ? 'isLigth' : 'isDark'} />
      <div className='tagContainer'>
        <h2 style={tag}>{color}</h2>
        <p>{`HSL: ${Math.round(HSL.h)}, ${Math.round(HSL.s)}, ${Math.round(HSL.l)}`}</p>
        <p>{`CMYK: ${CMYK.c}, ${CMYK.m}, ${CMYK.y}, ${CMYK.k}`}</p>
        <p>{`RGB: ${RGB.r}, ${RGB.g}, ${RGB.g}`}</p>
      </div>
    </div>
  )
}

export default Color
