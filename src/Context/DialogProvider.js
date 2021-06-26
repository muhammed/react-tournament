import DialogModal from '@/Components/DialogModal'
import React, { createContext, useState } from 'react'

export const DialogContext = createContext({})

export const DialogProvider = ({ children }) => {
  const [dialogOpened, setDialogOpened] = useState(false)
  const [dialogOptions, setDialogOptions] = useState(null)

  return (
    <DialogContext.Provider
      value={{
        dialogOpened,
        dialogOptions,
        setDialogOptions,
        setDialogOpened
      }}>
      <DialogModal />
      {children}
    </DialogContext.Provider>
  )
}
