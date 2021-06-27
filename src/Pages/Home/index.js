import React, { useState, useEffect } from 'react'
import styles from './home.module.scss'
import Layout from '@/Components/Layout'
import Link from '@/Components/Link'
import Button from '@/Components/Button'
import useGlobalState from '@/Hooks/useGlobalState'
import { ADD_TOURNAMENT } from '@/Constants/routePaths'
import TournamentItem from '@/Components/TournamentItem'
import Pagination from '@/Components/Pagination'
import Selectbox from '@/Components/Selectbox'

const PER_PAGE = 8

const SORT_TYPES = [
  {
    id: 0,
    title: 'NEWEST',
    sortFunction: (list) => {
      return list.sort(function (a, b) {
        return b.updatedAt - a.updatedAt
      })
    }
  },
  {
    id: 1,
    title: 'MOST POINTS',
    sortFunction: (list) => {
      return list.sort(function (a, b) {
        if (a.points === b.points) {
          return b.updatedAt - a.updatedAt
        }
        return b.points - a.points
      })
    }
  },
  {
    id: 2,
    title: 'LESS POINTS',
    sortFunction: (list) => {
      return list.sort(function (a, b) {
        if (a.points === b.points) {
          return b.updatedAt - a.updatedAt
        }
        return a.points - b.points
      })
    }
  }
]

const Home = () => {
  const { tournaments, initTournaments } = useGlobalState()
  const [currentPage, setCurrentPage] = useState(1)
  const [sortedTournaments, setSortedTournaments] = useState([])
  const [currentSort, setCurrentSort] = useState(SORT_TYPES[0])

  const handleSortChange = (event) => {
    const sortId = Number(event.target.value)
    sortTournaments(sortId)
    setCurrentPage(1)
  }

  const sortTournaments = (sortId) => {
    const findSort = SORT_TYPES.find((item) => item.id === sortId)
    if (findSort) {
      setCurrentSort(findSort)
      const tempList = [...tournaments]
      const sortedList = findSort.sortFunction(tempList)
      setSortedTournaments(sortedList)
    }
  }

  useEffect(() => {
    initTournaments()
  }, [])

  useEffect(() => {
    sortTournaments(currentSort.id)
  }, [tournaments, currentSort])

  return (
    <Layout className={styles.container}>
      <div className="container">
        <div className={styles.head}>
          <Link to={ADD_TOURNAMENT}>
            <Button title="ADD TOURNAMENT" />
          </Link>
          <Selectbox
            options={SORT_TYPES}
            title="SORT BY"
            onChange={handleSortChange}
            disabled={!sortedTournaments.length}
          />
        </div>
        {sortedTournaments.length ? (
          <>
            <div className={styles.title}>
              <b>VOTE</b> FOR <b>THE BEST TOURNAMENT</b> STREAMED!
            </div>
            <div className={styles.list}>
              {sortedTournaments
                .slice((currentPage - 1) * PER_PAGE, PER_PAGE * currentPage)
                .map((tournament) => (
                  <TournamentItem item={tournament} key={tournament.id} />
                ))}
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            You didn&apos;t add any tournaments yet.
          </div>
        )}
        {sortedTournaments.length > PER_PAGE && (
          <div className={styles.pagination}>
            <Pagination
              items={sortedTournaments}
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
