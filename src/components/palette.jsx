import React from 'react'
import Color from './color'

function Palette ({ palette }) {
  return (
    <div className='palette'>
      {palette.map((color) => {
        return <Color key={color} color={color} />
      })}
    </div>
  )
}

export default Palette
