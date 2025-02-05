import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

function AboutUs() {

  const {formData} = useContext(LanguageContext)

  return (
    <div>
      About Us
      <h1>{formData.name}</h1>
      <h1>{formData.email}</h1>
    </div>

  )
}

export default AboutUs

// Edited
