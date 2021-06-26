import React, { useState } from 'react'
import Input from '@/Components/Input'
import Layout from '@/Components/Layout'
import Button from '@/Components/Button'
import styles from './addTournament.module.scss'
import { useForm } from 'react-hook-form'
import useGlobalState from '@/Hooks/useGlobalState'
import { useHistory } from 'react-router-dom'

const REQUIRED_MESSAGE = 'This field is required'

const AddTournament = () => {
  const { addTournament } = useGlobalState()
  const history = useHistory()
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    setValue
  } = useForm({
    defaultValues: {
      name: 'muhammmeddddd',
      winnerTeam: 'teamm name',
      image:
        'https://daory-imgs.s3.us-east-2.amazonaws.com/faca933b-2396-46c9-9c65-6936e72cede3/tnThumbnail%202da%20versi%C3%B3n%20%281%29.jpg'
    }
  })
  const submit = (data) => {
    console.log({ data })
    addTournament(data)
    history.push('/')
  }
  return (
    <Layout showNavigation>
      <div className="container">
        <div className={styles.form}>
          <div className={styles.title}>ADD NEW NOMINEE</div>
          <Input
            label="Tournament Name"
            placeholder="e.g Catch The Great Muhammed"
            type="text"
            name="name"
            register={register}
            validateOptions={{
              required: REQUIRED_MESSAGE
            }}
            error={errors.name?.message}
          />
          <Input
            label="Tournament Winner Team"
            placeholder="e.g The Great Team"
            type="text"
            name="winnerTeam"
            register={register}
            validateOptions={{
              required: REQUIRED_MESSAGE
            }}
            error={errors.winnerTeam?.message}
          />
          <Input
            label="Cover Image URL"
            placeholder="e.g https://hire.designer"
            type="text"
            name="image"
            register={register}
            validateOptions={{
              required: REQUIRED_MESSAGE,
              pattern: {
                value:
                  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
                message: 'Entered value does not match website format'
              }
            }}
            error={errors.image?.message}
          />
          <Button
            title="ADD NOMINEE"
            onClick={handleSubmit(submit)}
            className={styles.btn}
          />
        </div>
      </div>
    </Layout>
  )
}

export default AddTournament
