import React, { useContext } from 'react'
import paletteContext from '../context/paletteContext'
import { generataPalette } from '../services/GenerateRandomHexColor'
import { useLocation } from 'wouter'

function GenerateButton() {
  const { setPalette } = useContext(paletteContext)
  const [location, pushLocation] = useLocation()

  const handleClick = () => {
    const newPalette = generataPalette()
    setPalette(newPalette)
    pushLocation(`/palette/${newPalette.join('-')}`, { replace: true })
  }

  return (
    <button className='generateBtn' onClick={handleClick}>
      New Palette
    </button>
  )
}

export default GenerateButton
