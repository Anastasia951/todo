import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './comments/commentsReducer'
import filtersReducer from './filters/filtersReducer'
import ticketsReducer from './tickets/ticketsReducer'

const ticketsMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action)
  if (action.type.match(/ticket/gi)) {
    let tickets = store.getState().tickets
    localStorage.setItem('tickets', JSON.stringify(tickets))
  }

  if (action.type.match(/comment/gi)) {
    let comments = store.getState().comments
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  return result
}

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: ticketsReducer,
    comments: commentsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ticketsMiddleware),
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
