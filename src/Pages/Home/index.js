import React, { useEffect } from 'react'
import styles from './home.module.scss'
import Layout from '@/Components/Layout'
import Link from '@/Components/Link'
import Button from '@/Components/Button'
import useGlobalState from '@/Hooks/useGlobalState'
import { ADD_TOURNAMENT } from '@/Constants/routePaths'

const Home = () => {
  const { tournaments, initTournaments } = useGlobalState()
  useEffect(() => {
    console.log({ tournaments })
  }, [tournaments])

  return (
    <Layout className={styles.container}>
      <div className="container">
        <Link to={ADD_TOURNAMENT}>
          <Button title="ADD TOURNAMENT" />
        </Link>
        home {tournaments.length}
      </div>
    </Layout>
  )
}

export default Home
