import React from 'react'
import './main.css'
import { isDarkness } from '../../services/VerifyColorIsDarkness'
import ColorActionsBar from '../colorToolBar/index'
import { hexToCMYK, hexToHSL, hexToRGB } from '../../services/changeColorMode'

function Color ({ color }) {
  const theme = isDarkness(color) ? 'isLigth' : 'isDark'
  const ColorStatus = ''
  
  const HSL = hexToHSL(color)
  const CMYK = hexToCMYK(color)
  const RGB = hexToRGB(color)

  const colorStyle = {
    background: '#' + color,
  }

  return (
    <div className={'color ' + theme} style={colorStyle}>
      <span className='span'>{ColorStatus}</span>
      <ColorActionsBar color={color} theme={theme} />
      <div className='tagContainer'>
        <h2 className='tag'>{color}</h2>
        <p>{`${RGB.r}, ${RGB.g}, ${RGB.g}`}</p>
      </div>
    </div>
  )
}

export default Color
