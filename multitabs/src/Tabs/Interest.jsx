import React from 'react'
import { useTab } from '../TabContext'

const Interest = () => {
  const { 
    setActiveTab, 
    interest, 
    setInterest,
    subscribe,
    setSubscribe
  } = useTab();

  const handleNext = () => {
    if(interest.trim() === ''){
       alert('please select an interest before hitting on that next')
    }else{
      setActiveTab('settings');
    }
  }

  return (
    <>
      <label>Select Interest:</label>
      <select value = {interest} onChange={(e) => setInterest(e.target.value)}>
        <option value="">--- Choose an option ---</option>
        <option value="music">Music</option>
        <option value="sports">Sports</option>
        <option value="dance">Dance</option>
        <option value="reading">Reading</option>
        <option value="travel">Travel</option>
      </select>
      <div>
        <input
          type = "checkbox"
          checked = {subscribe}
          onChange={(e) => setSubscribe(e.target.value)}
        />
        <label>Subscribe to NewsLetter</label>
      </div>
      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Interest