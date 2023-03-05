import React from 'react'
import { usePalette } from '../hooks/usePalette'
import { generataPalette } from '../services/GenerateRandomHexColor'

function GenerateButton() {
  const { setPalette, config } = usePalette()

  const handleClick = () => {
    setPalette(generataPalette(config))
  }

  return (
    <button
      className='generateBtn'
      onClick={handleClick}
      id='generateButton'
    >
      <span>New Palette</span>
    </button>
  )
}

export default GenerateButton
