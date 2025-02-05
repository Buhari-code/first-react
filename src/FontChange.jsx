import React, { useState } from 'react'
import LanguageChange from './LanguageChange'

function FontChange({error}) {
 
  const [paragraph, setParagraph] = useState('normal')
  const [extra, setExtra] = useState('Hello i am buhari')

  return (
    <div>
      <p style={{fontStyle: paragraph === 'Italic' ? 'italic' : 'normal', fontWeight: paragraph === 'bold' ? 'bold' : 'normal'}}>This is the paragraph {paragraph === 'Italic' ? 'This is Italic' : 'This is Bold'}</p>
      <button onClick={() => setParagraph('Italic')}>Italic</button>
      <button onClick={() => setParagraph('bold')}>Bold</button>
      <p>{error}</p>
      <LanguageChange extra={extra}/>
    </div>
  )
}

export default FontChange
