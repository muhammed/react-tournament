import React, { createContext, useState } from 'react'

export const GlobalStateContext = createContext({})

export const GlobalStateProvider = ({ children }) => {
  const [tournaments, setTournaments] = useState([])
  return (
    <GlobalStateContext.Provider value={{ tournaments, setTournaments }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
