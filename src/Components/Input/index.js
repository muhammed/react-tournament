import React from 'react'
import styles from './input.module.scss'
import classnames from 'classnames'

const Input = (props) => {
  const { label, error } = props
  return (
    <div className={styles.container}>
      {label && <div className={styles.label}>{label}</div>}
      <input
        className={classnames(styles.input, { [styles.hasError]: error })}
        {...props}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  )
}

export default Input
