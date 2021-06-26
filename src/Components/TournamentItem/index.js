import React from 'react'
import useGlobalState from '@/Hooks/useGlobalState'
import styles from './tournamentItem.module.scss'

const TournamentItem = ({ item }) => {
  const { deleteTournament } = useGlobalState()
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={item.image} className={styles.img} />
        <div className={styles.points}>
          <div className={styles.pointsTitle}>{item.points}</div>
          <div className={styles.pointsText}>POINTS</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.info}>
          <div className={styles.infoTitle}>Winner:</div>
          <div className={styles.infoText}>{item.winnerTeam}</div>
        </div>
        {item.points > 0 ? (
          <div className={styles.info}>
            <div className={styles.infoTitle}>Last Vote Date:</div>
            <div className={styles.infoText}>{item.winnerTeam}</div>
          </div>
        ) : (
          <div className={styles.infoText}>Not voted yet</div>
        )}
        <div className={styles.footer}>
          <div className={styles.buttons}>
            <button className={styles.button}>DOWN</button>
            <button className={styles.button}>UP</button>
          </div>
          <button className={styles.delete} onClick={() => deleteTournament(item)}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  )
}

export default TournamentItem
