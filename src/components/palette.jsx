import React, { useContext } from 'react'
import paletteContext from '../context/paletteContext'
import Color from './color'
import GenerateButon from './generateButton'

function Palette () {
  const { palette } = useContext(paletteContext)

  return (
    <div className='palette'>
      {palette.map((color) => {
        return <Color key={color} color={color} />
      })}
      <GenerateButon />
    </div>
  )
}

export default Palette
