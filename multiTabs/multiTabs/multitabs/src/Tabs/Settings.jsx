import React from 'react'
import { useTab } from '../TabContext'
import '../multiTabs.css'
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { formData, setFormData } = useTab();
  const navigate = useNavigate();

    const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/preferences/submit-all', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Submission successful');
        navigate('/success'); 
      } else {
        const error = await response.json();
        console.error('Submission failed:', error);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div>
      <label>Notification Preferences:</label>
      <label>
        <input
          type="radio"
          name="notification"
          value="email"
          checked={formData.notificationPreference === 'email'}
          onChange={(e) => setFormData({ ...formData, notificationPreference: e.target.value })}
        />
        Email
      </label>
      <label>
        <input
          type="radio"
          name="notification"
          value="sms"
          checked={formData.notificationPreference === 'sms'}
          onChange={(e) => setFormData({ ...formData, notificationPreference: e.target.value })}
        />
        SMS
      </label>
      <label>
        <input
          type="radio"
          name="notification"
          value="none"
          checked={formData.notificationPreference === 'none'}
          onChange={(e) => setFormData({ ...formData, notificationPreference: e.target.value })}
        />
        None
      </label>
      <div>
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Settings