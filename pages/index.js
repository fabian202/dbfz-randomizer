import { Card, Button } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import arrayShuffle from 'array-shuffle'
import { useState } from 'react'

export default function Home() {
  const r = (Math.random() + 1).toString(36).slice(2)
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="https://www.pcgamesn.com/wp-content/uploads/legacy/Dragon_Ball_FighterZ.jpg"
        />
        <Card.Body>
          <Card.Title>Dragon Ball FighterZ Randomizer</Card.Title>
          <Card.Text>
            Create a session for you and a friend and pick some random
            characters
          </Card.Text>
          <Link href={`/${r}`}>
            <button className="button">Start!</button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
