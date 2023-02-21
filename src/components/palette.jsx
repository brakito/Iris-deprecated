import React from 'react'
import { usePalette } from '../hooks/usePalette'
import Color from './color'

function Palette () {
  const { palette } = usePalette()

  return (
    <div className='palette'>
      {palette.map((color, index) => {
        return <Color key={`${color}-${index}`} color={color} />
      })}
    </div>
  )
}

export default Palette
