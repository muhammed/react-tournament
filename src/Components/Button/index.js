import React from 'react'
import styles from './button.module.scss'
import classnames from 'classnames'

const Button = (props) => {
  return (
    <button className={styles.container} {...props}>
      <span className={styles.title}>{props.title}</span>
    </button>
  )
}

export default Button
