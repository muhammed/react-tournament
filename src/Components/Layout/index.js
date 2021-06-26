import React from 'react'
import Header from '@/Components/Header'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
