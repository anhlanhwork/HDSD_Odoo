import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { TopNav } from './components/TopNav'
import { SubBar } from './components/SubBar'
import { HomePage } from './pages/HomePage'
import { DocPage } from './pages/DocPage'

export const App: React.FC = () => {
  return (
    <Router>
      <TopNav />
      <SubBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs/:slug" element={<DocPage />} />
        <Route path="/docs/:slug/:feature" element={<DocPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
