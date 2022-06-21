import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './pages/details'
import Home from './pages/home'
import NotFound from './pages/notFound'

function App () {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:pokemonName' element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
