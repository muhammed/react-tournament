import { ToastrContext } from '@/Context/ToastrProvider'
import React, { useContext, useEffect } from 'react'

const DEFAULT_OPTIONS = {
  description: null,
  type: 'success',
  timeOut: 3500,
  close: null, //<div>close</div>
  icon: null, //<div>icon</div>
  onClick: () => {},
  onClose: () => {}
}

const useToastr = () => {
  const { toastrList, setToastrList } = useContext(ToastrContext)
  const showToastr = (options) => {
    const optionsFinal = {
      ...DEFAULT_OPTIONS,
      ...options,
      id: Math.random()
    }
    setToastrList([...toastrList, optionsFinal])
    setTimeout(() => {
      hideToastr(optionsFinal)
    }, optionsFinal.timeOut)
    clearTimeout()
  }

  const hideToastr = (toastr) => {
    const tempList = toastrList.filter((item) => item.id !== toastr.id)
    setToastrList(tempList)
  }

  return { toastrList, showToastr, hideToastr }
}

export default useToastr
