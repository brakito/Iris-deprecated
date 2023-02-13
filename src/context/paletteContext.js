import React, { useState } from 'react'

const Context = React.createContext({})

export function PaletteContextProvider ({ children }) {
  const [palette, setPalette] = useState([])

  return (
    <Context.Provider value={{ palette, setPalette }}>
      {children}
    </Context.Provider>
  )
}

export default Context
