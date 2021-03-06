import { Card } from 'react-bootstrap'
import Link from 'next/link'

export default function Home() {
  const r = (Math.random() + 1).toString(36).slice(2)
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="/card.jpg"
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
