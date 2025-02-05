import React, { useContext, useState } from 'react'
import { LanguageContext } from './LanguageContext'

function Form() {

  const {setForm} = useContext(LanguageContext)


  const [localFormData, setLocalFormData] = useState({
          name:'',
          number:'',
          email:'',
          password:''
      })

    const handleSumbit = (e) => {
       e.preventDefault()
       setForm(localFormData)

       setLocalFormData({
          name:'',
          number:'',
          email:'',
          password:''
       })

       
    }
    const handleChange = (event) => {

        const {name, value} = event.target

        setLocalFormData((prev) => ({
          ...prev,
          [name]: value
        }))
    }

  return (
    <div>
      <h1>User Form</h1>
      <form action="" style={{display:'flex', flexDirection:'column'}} onSubmit={handleSumbit}>
      <input type="text" placeholder='name' name='name' value={localFormData.name} onChange={handleChange} />
      <input type="number" placeholder='Ph number' name='number' value={localFormData.number} onChange={handleChange}/>
      <input type="text" placeholder='Email' name='email' value={localFormData.email} onChange={handleChange}/>
      <input type="password" placeholder='Password' name='password' value={localFormData.password} onChange={handleChange}/>

      <button type='submit'>Sumbit</button>
      </form>
    </div>
  )
}

export default Form
