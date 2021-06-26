import { TOURNAMENTS } from '@/Constants/storage'
import { DialogContext } from '@/Context/DialogProvider'
import React, { useCallback, useContext, useEffect } from 'react'
import useToastr from '@/Hooks/useToastr'

const useDialog = () => {
  const { dialogOpened, dialogOptions, setDialogOpened, setDialogOptions } =
    useContext(DialogContext)

  const showDialog = (options) => {
    setDialogOpened(true)
    setDialogOptions(options)
  }

  const hideDialog = () => {
    setDialogOptions(null)
    setDialogOpened(false)
  }

  return { dialogOpened, showDialog, hideDialog, dialogOptions }
}

export default useDialog
