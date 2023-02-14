import React from 'react'
import Palette from '../components/palette'

function RandomPalette (props) {
  const { palette } = props.params
  const newPalette = palette.split('-')

  return (
    <section>
      <Palette palette={newPalette} />
    </section>
  )
}

export default RandomPalette
