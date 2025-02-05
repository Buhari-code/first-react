import React, { createContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

function LanguageProvider({children}) {

    const [selectedLanguage, setSelectedLanguage] = useState('en')

    const [formData, setFormData] = useState({
        name:'',
        number:'',
        email:'',
        password:''
    })
    
    // const updateForm = (name, value) => {
    //   setFormData((prev) => ({
    //         ...prev,
    //         [name] : value
    //     }))    
    // }

    const setForm = (form) => {
//   If you don’t call setFormData(form) in setForm, the state will only be updated when getForm is called (e.g., on page refresh).

// This means that after submitting the form, the state will not be updated until the component re-mounts or getForm is explicitly called.
         setFormData(form)    
        localStorage.setItem("FormData", JSON.stringify(form))
    }


    const getForm = () => {
        const getData = localStorage.getItem('FormData')
        if(getData) {
            setFormData(JSON.parse(getData))

        }
    }



    const getLanguage = () => {
        const storedLanguage = localStorage.getItem('languages')
        if(storedLanguage) {
            setSelectedLanguage(storedLanguage)
        }
    }

    const changeLanguage = (language) => {
        setSelectedLanguage(language)
        localStorage.setItem('languages', language)
    }

    useEffect(() => {
        getLanguage()
        getForm()
    }, [])

  return (
    <LanguageContext.Provider value={{selectedLanguage, getLanguage, changeLanguage, formData, setForm, getForm, setFormData, }}>
        {children}
    </LanguageContext.Provider>
  )
}

export {LanguageProvider , LanguageContext}


