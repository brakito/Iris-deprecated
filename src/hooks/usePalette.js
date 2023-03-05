import { useContext, useEffect } from 'react'
import paletteContext from '../context/paletteContext'
import { useLocation } from 'wouter'

export function usePalette() {
  const { palette, setPalette, config, setConfig } = useContext(paletteContext)
  // eslint-disable-next-line
  const [location, pushLocation] = useLocation()

  useEffect(() => {
    const newConfig = config
    newConfig.paletteLength = palette.length > 0 ? palette.length : 2 
    setConfig(newConfig)

    pushLocation(`/${palette.join('-')}`, { replace: true })

  }, [pushLocation, palette, setConfig, config])

  return { palette, setPalette, config, setConfig }
}
