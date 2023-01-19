import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFiltersState {
  comment: boolean
  description: boolean
  tag: boolean
}

export type TFilter = keyof IFiltersState

const initialState: IFiltersState = {
  comment: false,
  description: false,
  tag: false,
}
const filtersReducer = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeField(state, { payload }: PayloadAction<TFilter>) {
      state[payload] = !state[payload]
    },
  },
})

export default filtersReducer.reducer

export const { changeField } = filtersReducer.actions
