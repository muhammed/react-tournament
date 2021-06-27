import React, { useState } from 'react'
import styles from './selectbox.module.scss'

const Selectbox = (props) => {
  const { options, title } = props
  return (
    <select className={styles.select} defaultValue="" {...props}>
      {title && (
        <option disabled value="">
          {title}
        </option>
      )}
      {options?.map((option) => (
        <option value={option.id} key={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  )
}

export default Selectbox
