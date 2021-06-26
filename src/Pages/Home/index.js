import React, { useEffect } from 'react'
import styles from './home.module.scss'
import Layout from '@/Components/Layout'
import Link from '@/Components/Link'
import Button from '@/Components/Button'
import useGlobalState from '@/Hooks/useGlobalState'
import { ADD_TOURNAMENT } from '@/Constants/routePaths'
import TournamentItem from '@/Components/TournamentItem'

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
        {tournaments.length ? (
          <div className={styles.list}>
            {tournaments.map((tournament) => (
              <TournamentItem item={tournament} key={tournament.id} />
            ))}
          </div>
        ) : (
          <div>You didn&apos;t add any tournaments yet.</div>
        )}
      </div>
    </Layout>
  )
}

export default Home
