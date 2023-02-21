import { useContext, useEffect, useState } from 'react'
import paletteContext from '../context/paletteContext'
import { useLocation } from 'wouter'
import { generataPalette } from '../services/GenerateRandomHexColor'

export function usePalette () {
  const [newPalette, getNewPalette] = useState(false)
  const { palette, setPalette, config, setConfig } = useContext(paletteContext)
  // eslint-disable-next-line
  const [location, pushLocation] = useLocation()
  const newConfig = {paletteLength: palette.length, generationMode: null}
  const {paletteLength} = config

  useEffect(() => {
    setConfig(newConfig)
    if (newPalette === true) {
      const paletteToUse = generataPalette(paletteLength)
      pushLocation(`/${paletteToUse.join('-')}`, { replace: true })
      setPalette(paletteToUse)
      getNewPalette(false)
    }
  }, [newPalette, pushLocation, setPalette, paletteLength])

  return { palette, setPalette, getNewPalette, config, setConfig }
}
