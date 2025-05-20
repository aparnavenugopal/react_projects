import React, { useState }  from 'react'
import { useTab } from '../TabContext'

export const Profile = () => {
  const { 
     setActiveTab,
     age,
     setAge,
     email,
     setEmail,
   } = useTab();

   const [ageError, setAgeError ] = useState('');
   const [emailError, setEmailError] = useState('');

   const validateAge = (value) => {
    if(!/^\d*$/.test(value)){
        setAgeError('only numbers are allowed!');
    }else{
        setAgeError('');
    }
    setAge(value);
   }

   const validateEmail = (value) => {
     if (!/^\S+@\S+\.\S+$/.test(value)) {
        setEmailError('enter a valid error');
     }else{
        setEmailError('');
     }
     setEmail(value);
   }
  
  const handleEnter = (e) => {
    if(e.key === 'Enter'){
        if(!ageError && !emailError && age.trim !== '' && email.trim() !== ''){
            setActiveTab('interest');
        }
    }
  }

  return (
    <div>
        <label>Age:</label>
        <input
          type ="text"
          value = {age}
          onChange={(e) => validateAge(e.target.value)}
          onKeyDown={handleEnter}
        />

         {ageError && <p style={{ color: 'red' }}>{ageError}</p>}

        <label>Email:</label>
        <input
          type="email"
          value = {email}
          onChange = {(e) => validateEmail(e.target.value)}
          onKeyDown={handleEnter}
        />

        {emailError && <p style = {{ color: 'red' }}>{emailError}</p>}

         <button onClick={() => {
               if (!ageError && !emailError && age.trim() !== '' && email.trim() !== '') {
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
