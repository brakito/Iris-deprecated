import React, { useState } from 'react'

const Context = React.createContext({})

export function PaletteContextProvider ({ children }) {
  const [palette, setPalette] = useState([])
  const [config, setConfig] = useState({
    paletteLength: 5,
    generationMode: null
  })

  return (
    <Context.Provider value={{ palette, setPalette, config, setConfig }}>
      {children}
    </Context.Provider>
  )
}

export default Context
