import React from 'react'
import Header from '@/Components/Header'
import styles from './layout.module.scss'
import Button from '@/Components/Button'
import { useHistory } from 'react-router-dom'
import Link from '@/Components/Link'
import { HOME } from '@/Constants/routePaths'

const Layout = ({ children, showNavigation }) => {
  const history = useHistory()

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className="container">
          {showNavigation && (
            <div className={styles.navigation}>
              <Link to={HOME}>
                <Button type="secondary" title="GO BACK" />
              </Link>
            </div>
          )}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
