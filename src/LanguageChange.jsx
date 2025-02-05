import React, { useState } from 'react'

function LanguageChange({extra}) {

    const [languageChange, setlanguageChange] = useState('English')

  return (
    <div>
      <p>{languageChange === 'Tamil' ? 'ஹலோ உலகம்' : 'Hello World'}</p>
      <button onClick={() => setlanguageChange('English')}>English</button>
      <button onClick={() => setlanguageChange('Tamil')}>Tamil</button>
      <p>{extra}</p>
    </div>
  )
}

export default LanguageChange
