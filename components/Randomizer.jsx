import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Placeholder,
  Toast,
  Button,
  ToastContainer,
} from 'react-bootstrap'
import arrayShuffle from 'array-shuffle'
import styles from '../styles/Home.module.css'
import { useChannel } from '../hooks/useChannel'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Randomizer = ({ characters, roomId }) => {
  const [shuffled, setShuffled] = useState()
  const [show, setShow] = useState(false)
  const [channel, ably] = useChannel(roomId, (message) => {
    const { data, name, connectionId } = message
    const myId = ably?.connection?.id
    if (name === 'new-connection' && myId && connectionId !== myId) {
      sendData(shuffled ? shuffled : arrayShuffle(characters))
    }

    if (name === 'rando' && data) setShuffled(data)
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!shuffled) {
        setShuffled(arrayShuffle(characters))
      }
    }, 5000)

    if (!shuffled) {
      channel.publish({ name: 'new-connection' })
    }

    return () => {
      clearTimeout(timer)
    }
  }, [shuffled])

  const handleRamdomize = () => {
    const data = arrayShuffle(characters)
    sendData(data)
    setShuffled(data)
  }

  const sendData = (data) => channel.publish({ name: 'rando', data })

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
        <Col className={styles.characters}>
          {shuffled ? (
            renderShuffled(0, 3)
          ) : (
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
          )}
        </Col>
      </Row>
      <img src="/vs.png" />
      <Row>
        <Col className={styles.characters}>
          {shuffled ? (
            renderShuffled(4, 7)
          ) : (
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
          )}
        </Col>
      </Row>
      <button className="button mb-4" size="lg" onClick={handleRamdomize}>
        Shuffle
      </button>
      <Row className={styles.characters}>
        <Col>
          <span>Now you can share the link </span>
          <CopyToClipboard
            text={window.location.href}
            onCopy={() => setShow(true)}
          >
            <Button>Copy Link</Button>
          </CopyToClipboard>
        </Col>
      </Row>
      <ToastContainer className="p-3" position="bottom-center">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>Copied to clipboard</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

// window.location.href

export default Randomizer
