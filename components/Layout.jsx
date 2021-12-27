import React from 'react'
import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
  return (
    <Container className={styles.container}>
      <Head>
        <title>DBFZ Randomizer</title>
        <meta name="description" content="DBFZ Randomizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/fabian202"
          target="_blank"
          rel="noopener noreferrer"
        >
          By fabian202{' '}
          <span className={styles.logo}>
            <img
              src="https://github.com/fabian202.png?size=40"
              alt="Vercel Logo"
            />
          </span>
        </a>
      </footer>
    </Container>
  )
}

export default Layout
