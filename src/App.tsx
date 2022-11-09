import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FullTicket } from './pages/FullTicket/FullTicket'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<TestComponent />}></Route> */}
      <Route path='/' element={<Home />}></Route>
      <Route path='/full/:ticketId' element={<FullTicket />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
