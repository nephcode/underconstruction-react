import { StrictMode } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>,
)
