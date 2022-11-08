import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filters/filtersReducer'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
