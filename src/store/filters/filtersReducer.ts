import { createSlice } from '@reduxjs/toolkit'

export type TFilter = 'all' | 'todo' | 'inProgress' | 'done'

interface IFiltersState {
  field: TFilter
}

const initialState: IFiltersState = {
  field: 'all',
}
const filtersReducer = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
})

export default filtersReducer.reducer
