import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const Home: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon className='w-7 h-7' role="button" onClick={() => { setTheme('light') }} />
      )
    } else {
      return (
        <MoonIcon
          className='w-7 h-7'
          role="button"
          onClick={() => {
            setTheme('dark')
          }}
        />
      )
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Abc Developers</title>
        <meta name="description" content="Abc developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
        <div className='border-b border-gray-700 dark:border-gray-100' >
          <div className='container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center absolute' style={{
            top: 0,
            flexDirection: 'column-reverse'
          }}>
            {renderThemeChanger()}</div>
          <h1 className={styles.title}>
            Welcome to Abc Developers
          </h1>
        </div>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className="dark:bg-blue-900">pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        {/* </div> */}
      </main>

      <footer className={styles.footer}>
        <p className='text-xs'>
          Copyright © 2022 Abc Developers. All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default Home
