import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import arrayShuffle from 'array-shuffle'
import styles from '../styles/Home.module.css'
import { useChannel } from '../hooks/useChannel'

const Randomizer = ({ characters, roomId }) => {
  const [shuffled, setShuffled] = useState()
  const [channel, ably] = useChannel('chat-demo', ({ data }) => {
    data ? setShuffled(data) : handleRamdomize()
  })

  useEffect(() => {
    channel.publish({ name: 'new-connection' })
  }, [])

  const handleRamdomize = () => {
    const data = arrayShuffle(characters)
    channel.publish({ name: 'rando', data })
    setShuffled(data)
  }

  const renderShuffled = (start, end) =>
    shuffled
      ?.slice(start, end)
      .map((c) => (
        <img
          className="mt-1"
          key={c}
          src={`https://dba.bn-ent.net/character/images/select_${c}_off.png`}
        />
      ))

  return (
    <>
      {characters.map((i) => (
        <img
          key={`chached${i}`}
          src={`https://dba.bn-ent.net/character/images/select_${i}_off.png`}
          className="d-none"
        />
      ))}
      <Row>
        <Col>
          <img
            src="https://dbfz.bn-ent.net/images/common/logo_dbfz.png"
            className={styles.logoImg}
          />
        </Col>
      </Row>
      <Row>
        <Col className={styles.characters}>{renderShuffled(0, 3)}</Col>
      </Row>
      <img src="/vs.png" />
      <Row>
        <Col className={styles.characters}>{renderShuffled(4, 7)}</Col>
      </Row>
      <button className="button" size="lg" onClick={handleRamdomize}>
        Shuffle
      </button>
    </>
  )
}

export default Randomizer
