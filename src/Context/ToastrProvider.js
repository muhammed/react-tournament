import React, { createContext, useState } from 'react'
import ToastrList from '@/Components/ToastrList'

export const ToastrContext = createContext({})

export const ToastrProvider = ({ children }) => {
  const [toastrList, setToastrList] = useState([])
  return (
    <ToastrContext.Provider value={{ toastrList, setToastrList }}>
      <ToastrList />
      {children}
    </ToastrContext.Provider>
  )
}
