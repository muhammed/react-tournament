import { ToastrContext } from '@/Context/ToastrProvider'
import React, { useContext, useEffect } from 'react'

const DEFAULT_OPTIONS = {
  description: null,
  type: 'success',
  timeOut: 5000,
  onClick: () => {},
  onClose: () => {}
}

var timeOut = null

const useToastr = () => {
  const { toastrList, setToastrList } = useContext(ToastrContext)
  const showToastr = (options) => {
    setToastrList([])
    const optionsFinal = {
      ...DEFAULT_OPTIONS,
      ...options,
      id: Math.random()
    }
    setToastrList([optionsFinal])
    if (timeOut) {
      timeOut = null
      clearTimeout(timeOut)
    } else {
      timeOut = setTimeout(() => {
        hideToastr()
      }, optionsFinal.timeOut)
    }
  }

  const hideToastr = (toastr) => {
    setToastrList([])
  }

  return { toastrList, showToastr, hideToastr }
}

export default useToastr
