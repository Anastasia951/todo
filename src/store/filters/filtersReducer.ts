import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IFiltersState {
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
    saveFilters(state, { payload }: PayloadAction<IFiltersState>) {
      for (let key in payload) {
        //@ts-ignore
        state[key] = payload[key]
      }
    },
  },
})

export default filtersReducer.reducer

export const { changeField, saveFilters } = filtersReducer.actions
