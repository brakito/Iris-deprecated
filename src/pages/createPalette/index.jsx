import React, { useEffect } from 'react'
import './main.css'
import Palette from '../../components/palette/index'
import { usePalette } from '../../hooks/usePalette'
import PaletteActions from '../../components/paletteActionsContainer'

function CreatePalette(props) {
  const { urlPalette } = props.params
  const { palette, setPalette } = usePalette()

  useEffect(() => {
    setPalette(urlPalette.split('-'))
  }, [setPalette, urlPalette])

  return (
    <section className='createPalette'>
      <Palette palette={palette} />
      <PaletteActions />
    </section>
  )
}

export default CreatePalette
