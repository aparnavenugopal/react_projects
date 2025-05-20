import React from 'react'
import { MultiTabs } from './MultiTabs'
import { TabProvider } from './TabContext'

function App() {


  return (
    <>
      <TabProvider>
           <MultiTabs/>   
      </TabProvider> 
    </>
  )
}

export default App
