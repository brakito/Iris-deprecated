import React from 'react'
import { usePalette } from '../hooks/usePalette'

function GenerateButton () {
  const { getNewPalette } = usePalette()

  const handleClick = () => {
    getNewPalette(true)
  }

  return (
    <button className='generateBtn' onClick={handleClick} id='generateButton'>
      New Palette
    </button>
  )
}

export default GenerateButton
