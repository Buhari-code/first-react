import React, { useContext, useState } from 'react'
import { LanguageContext } from './LanguageContext'

function EvenorOdd({number}) {

    const isEven = number % 2 === 0

    const {formData} = useContext(LanguageContext)

  return (
    <div>
      <p>The {number} is {isEven ? 'even' : 'odd'}</p>
      <h1>{formData.name}</h1>
      <h1>{formData.email}</h1>
    </div>
  )
}

export default EvenorOdd
