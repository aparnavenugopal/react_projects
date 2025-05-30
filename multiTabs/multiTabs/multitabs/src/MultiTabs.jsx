import React from 'react'
import { Profile } from './Tabs/Profile'
import Interest from './Tabs/Interest'
import Settings from './Tabs/Settings'
import { useTab } from './TabContext'
import  './multiTabs.css'

export const MultiTabs = () => {
  const { activeTab, setActiveTab} = useTab();
  
  const renderTab = () => {
    switch(activeTab){
        case 'profile':
            return <Profile/>
        case 'interest':
            return <Interest/>
        case 'settings':
            return <Settings/>
        default:
            return null;
    }
  }

  return (
    <>
     <h1>MultiTab Form</h1>
     <button onClick={() => setActiveTab('profile')} className={`tab ${activeTab === 'profile' ? 'activetab' : ''}`}>
         Profile
     </button>
     <button onClick={() => setActiveTab('interest')} className={`tab ${activeTab == 'interest' ? 'activetab' : ''}`}>
          Interest
     </button>
     <button onClick= {() => setActiveTab('settings')} className={`tab ${activeTab === 'settings' ? 'activetab' : ''}`}>
          Settings  
     </button>
     {renderTab()}
    </>
  )
}
