import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { ModalWrapper } from './components/Modals/ModalWrapper'
import { FullTicket } from './pages/FullTicket/FullTicket'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { saveTickets } from './store/tickets/ticketsReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
    dispatch(saveTickets(tickets))
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='create' element={<ModalWrapper type='create' />} />
          <Route path='edit/:id' element={<ModalWrapper type='edit' />} />
        </Route>
        <Route path='/full/:id' element={<FullTicket />}>
          <Route
            path='comment/create'
            element={<ModalWrapper type='commentCreate' />}
          />
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <div className='modal-container'></div>
    </>
  )
}

export default App
