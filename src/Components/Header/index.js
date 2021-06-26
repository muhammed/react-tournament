import React from 'react'
import styles from './header.module.scss'
import logo from '@/Assets/Images/logo_gray.svg'

const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
    </div>
  )
}

export default Header
