import React, { useContext } from 'react'
import paletteContext from '../context/paletteContext'
import { generataPalette } from '../services/GenerateRandomHexColor'

function GenerateButton () {
  const { setPalette } = useContext(paletteContext)
  
  const handleClick = () => {
    setPalette(generataPalette())
  }

  return (
    <button className='generateBtn' onClick={handleClick}>
      New Palette
    </button>
  )
}

export default GenerateButton
