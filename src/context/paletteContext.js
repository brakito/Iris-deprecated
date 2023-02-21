import React, { useState } from 'react'
import { generataPalette } from '../services/GenerateRandomHexColor'

const Context = React.createContext({})

export function PaletteContextProvider ({ children }) {
  const [palette, setPalette] = useState(generataPalette())
  const [config, setConfig] = useState({
    paletteLength: 2,
    generationMode: null
  })

  return (
    <Context.Provider value={{ palette, setPalette, config, setConfig }}>
      {children}
    </Context.Provider>
  )
}

export default Context
