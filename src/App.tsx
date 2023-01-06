import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ModalWrapper } from './components/Modals/ModalWrapper'
import { FullTicket } from './pages/FullTicket/FullTicket'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='create' element={<ModalWrapper type='create' />} />
        </Route>
        <Route path='/full/:ticketId' element={<FullTicket />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <div className='modal-container'></div>
    </>
  )
}

export default App
