import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { TopNav } from './components/TopNav'
import { Sidebar } from './components/Sidebar'
import { HomePage } from './pages/HomePage'
import { DocPage } from './pages/DocPage'
import './App.css'

export const App: React.FC = () => {
  return (
    <Router>
      <TopNav />
      <div className="app-layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/:slug" element={<DocPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
