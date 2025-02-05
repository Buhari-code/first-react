import React, { useContext, useState } from 'react'
import FontChange from './FontChange'
import { LanguageContext } from './LanguageContext'

function InputBackground() {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    const { selectedLanguage, changeLanguage } = useContext(LanguageContext)



    const handleSumbit = () => {
       if(inputValue.length > 10) {
        setError('It is not Valid')
        
       } 
    }

  return (
    <div>
      <FontChange error={error}/>
        <h1 style={{backgroundColor: inputValue.length > 10 ? 'blue' : 'yellow' }}>Background Color</h1>
      <input 
      type="text"
      placeholder='Enter here...'
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      />
      
      <button onClick={handleSumbit}>CLick</button>  


      <p>{selectedLanguage}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ta')}>Tamil</button>





      {/* In react button have onClick prop not onnSubmit only form have onSubmit prop */}
      
    </div>
  )
}

export default InputBackground
