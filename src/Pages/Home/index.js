import React, { useState } from 'react'
import styles from './home.module.scss'
import Layout from '@/Components/Layout'
import Link from '@/Components/Link'
import Button from '@/Components/Button'
import useGlobalState from '@/Hooks/useGlobalState'
import { ADD_TOURNAMENT } from '@/Constants/routePaths'
import TournamentItem from '@/Components/TournamentItem'
import Pagination from '@/Components/Pagination'

const PER_PAGE = 8

const Home = () => {
  const { tournaments, initTournaments } = useGlobalState()
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Layout className={styles.container}>
      <div className="container">
        <Link to={ADD_TOURNAMENT}>
          <Button title="ADD TOURNAMENT" />
        </Link>
        {tournaments.length ? (
          <div className={styles.list}>
            {tournaments
              .slice((currentPage - 1) * PER_PAGE, PER_PAGE * currentPage)
              .map((tournament) => (
                <TournamentItem item={tournament} key={tournament.id} />
              ))}
          </div>
        ) : (
          <div>You didn&apos;t add any tournaments yet.</div>
        )}
        {tournaments.length > PER_PAGE && (
          <div className={styles.pagination}>
            <Pagination
              items={tournaments}
              onPageChange={(page) => setCurrentPage(page)}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Home
