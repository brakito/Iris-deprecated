import React, { useEffect } from 'react'
import Palette from '../../components/palette/index'
import { usePalette } from '../../hooks/usePalette'

function RandomPalette(props) {
  const { urlPalette } = props.params
  const { palette, setPalette } = usePalette()

  useEffect(() => {
    setPalette(urlPalette.split('-'))
  }, [setPalette, urlPalette])

  return (
    <section>
      <Palette palette={palette} />
    </section>
  )
}

export default RandomPalette
