import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './comments/commentsReducer'
import filtersReducer from './filters/filtersReducer'
import ticketsReducer from './tickets/ticketsReducer'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tickets: ticketsReducer,
    comments: commentsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
