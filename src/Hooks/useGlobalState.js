import { TOURNAMENTS } from '@/Constants/storage'
import { GlobalStateContext } from '@/Context/GlobalStateProvider'
import React, { useCallback, useContext, useEffect } from 'react'
import useToastr from '@/Hooks/useToastr'
import useDialog from '@/Hooks/useDialog'

const useGlobalState = () => {
  const { tournaments, setTournaments } = useContext(GlobalStateContext)
  const { showToastr } = useToastr()
  const { showDialog, hideDialog } = useDialog()

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
    showDialog({
      title: 'Remove Nominee',
      description: `Do you want to remove ${item.name} from nominees?`,
      buttonApply: {
        title: 'OK',
        onPress: () => deleteTournamentConfirm(item)
      },
      buttonCancel: {
        title: 'CANCEL',
        onPress: () => hideDialog()
      }
    })
  }

  const deleteTournamentConfirm = (item) => {
    setTournaments((prev) => {
      const filtered = prev.filter((tournament) => tournament.id !== item.id)
      saveTournaments(filtered)
      return filtered
    })
    hideDialog()
    showToastr({
      description: `<b>${item.name}</b> removed from nominees`,
      type: 'success'
    })
  }

  const initTournaments = () => {
    const tournamentsTemp = localStorage.getItem(TOURNAMENTS)
    if (tournamentsTemp) {
      setTournaments(JSON.parse(tournamentsTemp))
    }
  }

  const upVote = (item) => {
    const tempList = [...tournaments]
    const findItem = tempList.find((el) => el.id === item.id)
    if (findItem) {
      findItem.points += 1
      findItem.updatedAt = new Date().getTime()
    }
    setTournaments(tempList)
  }

  const downVote = (item) => {
    const tempList = [...tournaments]
    const findItem = tempList.find((el) => el.id === item.id)
    if (findItem) {
      findItem.points = findItem.points - 1 < 0 ? 0 : findItem.points - 1
      findItem.updatedAt = new Date().getTime()
    }
    setTournaments(tempList)
  }

  const saveTournaments = (data) => {
    localStorage.setItem(TOURNAMENTS, JSON.stringify(data))
  }

  return {
    tournaments,
    addTournament,
    initTournaments,
    deleteTournament,
    upVote,
    downVote
  }
}

export default useGlobalState
