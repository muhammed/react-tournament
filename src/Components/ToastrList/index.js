import React from 'react'
import useToastr from '@/Hooks/useToastr'
import styles from './toastrList.module.scss'

const ToastrList = (props) => {
  const { toastrList, hideToastr } = useToastr()
  if (!toastrList?.length) return <div />
  return (
    <div className={styles.container}>
      {toastrList?.map((toastr) => (
        <div
          className={styles.item}
          key={toastr.id}
          type={toastr.type}
          onClick={() => hideToastr(toastr)}>
          <div className={styles.content}>
            {toastr.title && <div className={styles.title}>{toastr.title}</div>}
            <div className={styles.desc}>{toastr.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ToastrList
