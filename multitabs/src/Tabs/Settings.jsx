import React from 'react'
import { useTab } from '../TabContext'

const Settings = () => {
  const {notificationPreference, setNotificationPreference} = useTab();
  return (
    <div>
      <h2>Notification Preferences:</h2>
      <label>
          <input
              type="radio"
              name="notification"
              value = "email"
              checked = {notificationPreference === 'email'}
              onChange={(e) => setNotificationPreference(e.target.value)}
      />
      Email
      </label>
      <br/>
       <label>
        <input
          type="radio"
          name="notification"
          value="sms"
          checked={notificationPreference === 'sms'}
          onChange={(e) => setNotificationPreference(e.target.value)}
        />
        SMS
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="notification"
          value="none"
          checked={notificationPreference === 'none'}
          onChange={(e) => setNotificationPreference(e.target.value)}
        />
        None
      </label>
    </div>
  )
}

export default Settings