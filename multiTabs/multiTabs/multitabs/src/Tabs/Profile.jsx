import React, { useState }  from 'react'
import { useTab } from '../TabContext'
import '../multiTabs.css'

export const Profile = () => {
  const { 
     setActiveTab,
     formData,
     setFormData
   } = useTab();

   const [ageError, setAgeError ] = useState('');
   const [emailError, setEmailError] = useState('');

   const validateAge = (value) => {
    if(!/^\d*$/.test(value)){
        setAgeError('only numbers are allowed!');
    }else{
        setAgeError('');
    }
    setFormData({ ...formData, age: value });
   }

   const validateEmail = (value) => {
     if (!/^\S+@\S+\.\S+$/.test(value)) {
        setEmailError('enter a valid email');
     }else{
        setEmailError('');
     }
     setFormData({ ...formData, email: value });
   }
  
  const handleEnter = (e) => {
    if(e.key === 'Enter'){
        if(!ageError && !emailError && formData.age.trim() !== '' && formData.email.trim() !== ''){
            setActiveTab('interest');
        }
    }
  }

  return (
    <div className="profileParent">
        <div className="fieldRow">
          <label>Age:</label>
          <input
            type="text"
            value={formData.age}
            onChange={(e) => validateAge(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>
        {ageError && <p className="errorText">{ageError}</p>}

        <div className="fieldRow">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => validateEmail(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>
        {emailError && <p className="errorText">{emailError}</p>}

         <button className="nextButton" onClick={() => {
               if (!ageError && !emailError && formData.age.trim() !== '' && formData.email.trim() !== '') {
                  setActiveTab('interest');
               } else {
                 alert('Please fix the errors before proceeding');
               }
      }}>
        Next
      </button>
    </div>
  )
}
