import React from 'react'
import Color from './color'

function Palette({ palette }) {

  return (
    <div className='palette'>
      {palette.map((color, index) => {
        return <Color key={`${color}-${index}`} color={color} />
      })}
    </div>
  )
}

export default Palette
