import React from 'react'
import useToastr from '@/Hooks/useToastr'
import styles from './home.module.scss'
import Layout from '@/Components/Layout'

const Home = () => {
  const { showToastr } = useToastr()
  return (
    <Layout className={styles.container}>
      <div>home</div>
    </Layout>
  )
}

export default Home
