import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useRouter } from 'next/router'
const Randomizer = dynamic(() => import('../components/Randomizer'), {
  ssr: false,
})

const characters = [
  'goku-SS',
  'vegeta-SS',
  'trunks',
  'gohan-y',
  'freeza',
  'majinBoo-z',
  'cell',
  'kuririn',
  'piccolo',
  'no16',
  'no18',
  'gokuSsgss',
  'vegetaSsgss',
  'yamcha',
  'tenshinhan',
  'nappa',
  'ginyu',
  'gotenks',
  'gohan',
  'majinBoo',
  'beerus',
  'hit',
  'gokubl',
  'no21',
  'barduck',
  'broly',
  'zamasu',
  'vegetto',
  'goku',
  'vegeta',
  'cooler',
  'no17',
  'jiren',
  'videl',
  'goku-gt',
  'janemba',
  'gogeta',
  'broly-dbs',
  'kefla',
  'goku-ui',
  'masterroshi',
  'superbaby2',
  'gogetaSS4',
]

export default function Room() {
  const router = useRouter()
  const { roomId } = router.query

  // console.log(shuffled.slice(0, 3))
  return (
    <>
      <Randomizer characters={characters} roomId={roomId} />
    </>
  )
}
