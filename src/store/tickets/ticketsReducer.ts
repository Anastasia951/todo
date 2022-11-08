import { createSlice } from '@reduxjs/toolkit'
export type TId = string
interface ITicket {
  title: string
  description: string
  tags: string[]
  commentsIds: string[]
}

interface ITicketsState {
  tickets: Record<TId, ITicket>
  todo: TId[]
  done: TId[]
  inProgress: TId[]
}
const initialState: ITicketsState = {
  tickets: {},
  todo: [],
  done: [],
  inProgress: [],
}
const filtersReducer = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
})

export default filtersReducer.reducer
