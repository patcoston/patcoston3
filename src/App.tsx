import React from 'react'
//import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

import Home from './Home'
import Software from './Software'
import Games from './Games'
import Misc from './Misc'

const App = () => {
  return (
    <BrowserRouter>
      Test
      <div>
        <nav>
          Navigation
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/software">Software</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/misc">Misc</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/games" element={<Games />} />
          <Route path="/misc" element={<Misc />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
