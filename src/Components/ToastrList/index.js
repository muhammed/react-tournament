import React from 'react'
import useToastr from '@/Hooks/useToastr'

const ToastrList = (props) => {
  const { toastrList, hideToastr } = useToastr()
  return (
    <div className={styles.container}>
      {toastrList?.map((toastr) => (
        <div className={styles.item} key={toastr.id} type={toastr.type}>
          {toastr.close || (
            <button className={styles.close} onClick={() => hideToastr(toastr)}>
              X
            </button>
          )}
          <div className={styles.content}>
            <div className={styles.title}>{toastr.title}</div>
            <div className={styles.desc}>{toastr.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ToastrList
