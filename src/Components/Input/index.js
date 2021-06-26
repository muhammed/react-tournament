import React from 'react'
import styles from './input.module.scss'
import classnames from 'classnames'

const Input = (props) => {
  const { label, register, validateOptions, error, name, ...rest } = props
  return (
    <div className={styles.container}>
      {label && <div className={styles.label}>{label}</div>}
      <input
        {...rest}
        {...register(name, { ...validateOptions })}
        className={classnames(styles.input, {
          [styles.hasError]: error,
          [props.inputClassName]: props.inputClassName
        })}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  )
}

export default Input
