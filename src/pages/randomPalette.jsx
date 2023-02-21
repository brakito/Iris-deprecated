import React, { useEffect } from 'react'
import Palette from '../components/palette'
import { usePalette } from '../hooks/usePalette'

function RandomPalette (props) {
  const { urlPalette } = props.params
  const { palette, setPalette } = usePalette()
  
  useEffect(() => {
    setPalette(urlPalette.split('-'))
  }, [urlPalette, setPalette])
  
  return (
    <section>
      <Palette newPalette={palette} />
    </section>
  )
}

export default RandomPalette
