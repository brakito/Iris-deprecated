import React from 'react'
import './main.css'
import Color from '../color/index'

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
