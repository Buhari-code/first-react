import React, { useState } from 'react'
import InputBackground from './InputBackground'
import EvenorOdd from './EvenorOdd'
import Form from './Form'

function Home() {

  const [number, setNumber] = useState('')

  return (
    <div>
      <InputBackground />
      <input type="number" placeholder='number' onChange={(e) => setNumber(e.target.value)} value={number} />
      <EvenorOdd number={number}/>
      <Form />
    </div>
  )
}

export default Home
