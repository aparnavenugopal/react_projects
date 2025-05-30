import React from 'react'
import { useTab } from '../TabContext'
import '../multiTabs.css'

const Interest = () => {
  const { 
    setActiveTab, 
    formData, 
    setFormData
  } = useTab();

  const handleNext = () => {
    if (!formData.interest.length || formData.interest[0].trim() === '') {
      alert('please select an interest before hitting on that next');
    } else {
      setActiveTab('settings');
    }
  }

  return (
    <>
     <div className="profileParent">
      <div className="horizontalContainer">
      <label>Select Interest:</label>
        <select 
          className="interest" 
          value={formData.interest[0] || ''} 
          onChange={(e) => setFormData({ 
            ...formData, 
            interest: [e.target.value] 
          })}
        >
          <option value="">--- Choose an option ---</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="dance">Dance</option>
          <option value="reading">Reading</option>
          <option value="travel">Travel</option>
        </select>

        <div className="subscribeCheckbox">
          <input
            type="checkbox"
            checked={formData.subscribe}
            onChange={(e) => setFormData({ 
              ...formData, 
              subscribe: e.target.checked 
            })}
          />
          <label>Subscribe to NewsLetter</label>
        </div>
      </div>
     </div> 
      <div>
        <button className="nextButton" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default Interest