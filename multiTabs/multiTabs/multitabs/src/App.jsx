import React from 'react'
import { MultiTabs } from './MultiTabs'
import { TabProvider } from './TabContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SubmissionSuccess from './SubmissionSuccess'

function App() {


  return (
    <>
      <TabProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MultiTabs />} />
              <Route path="/success" element={<SubmissionSuccess />} />
            </Routes>
          </Router>
      </TabProvider> 
    </>
  )
}

export default App
