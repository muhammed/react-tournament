import { TOURNAMENTS } from '@/Constants/storage'
import { GlobalStateContext } from '@/Context/GlobalStateProvider'
import React, { useCallback, useContext, useEffect } from 'react'
import useToastr from '@/Hooks/useToastr'

const useGlobalState = () => {
  const { tournaments, setTournaments } = useContext(GlobalStateContext)
  const { showToastr } = useToastr()

  useEffect(() => {
    initTournaments()
  }, [])

  const addTournament = (data) => {
    const tournament = {
      ...data,
      id: Math.random(),
      points: 0,
      updatedAt: new Date().getTime()
    }
    setTournaments((prev) => {
      const newList = [tournament, ...prev]
      saveTournaments(newList)
      return newList
    })
    showToastr({
      description: 'New nominee added to nominees!',
      type: 'success'
    })
  }

  const deleteTournament = (item) => {
    setTournaments((prev) => {
      const filtered = prev.filter((tournament) => tournament.id !== item.id)
      saveTournaments(filtered)
      return filtered
    })
  }

  const initTournaments = () => {
    const tournamentsTemp = localStorage.getItem(TOURNAMENTS)
    if (tournamentsTemp) {
      setTournaments(JSON.parse(tournamentsTemp))
    }
  }

  const saveTournaments = (data) => {
    localStorage.setItem(TOURNAMENTS, JSON.stringify(data))
  }

  return { tournaments, addTournament, initTournaments, deleteTournament }
}

export default useGlobalState
