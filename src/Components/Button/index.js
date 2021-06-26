import React from 'react'
import styles from './button.module.scss'
import classnames from 'classnames'

const Button = (props) => {
  const { type, title } = props
  return (
    <button
      {...props}
      className={classnames(styles.container, {
        [styles.primary]: type === 'primary',
        [styles.secondary]: type === 'secondary',
        [props.className]: props.className
      })}>
      <span className={styles.title}>{title}</span>
    </button>
  )
}

Button.defaultProps = {
  type: 'primary'
}

export default Button
