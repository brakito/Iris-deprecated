import React, { useEffect, useState } from 'react'
import Color from './color'

function Palette ({ palette }) {
  const [paletteToUse, setPalete] = useState([])

  useEffect(function(){
    setPalete(palette)
  }, [palette])

  return (
    <div className='palette'>
      {paletteToUse.map((color) => {
        return <Color key={color} color={color} />
      })}
    </div>
  )
}

export default Palette
