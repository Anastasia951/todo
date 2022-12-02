import { createSlice } from '@reduxjs/toolkit'
export type TId = string
export interface ITicket {
  title: string
  description: string
  tags: string[]
  commentsIds: string[]
}

interface ITicketsState {
  tickets: Record<TId, ITicket>
  // ids: TId[]
  todo: TId[]
  done: TId[]
  inProgress: TId[]
}
const initialState: ITicketsState = {
  tickets: {
    xqws: {
      title: 'jkjkj',
      description: 'Description',
      tags: ['yellow', 'green', 'red', 'violet', 'lightBlue'],
      commentsIds: ['sdsd', 'sddff'],
    },
    adfv: {
      title: 'dfdfd',
      description: 'Description',
      tags: ['yellow', 'green'],
      commentsIds: [],
    },
    wefv: {
      title: 'dfdrerer',
      description: 'Description',
      tags: ['yellow', 'darkBlue'],
      commentsIds: [],
    },
  },
  todo: ['xqws', 'adfv'],
  done: [],
  inProgress: ['wefv'],
  // ids: ['xqws', 'adfv', 'wevf'],
}
const filtersReducer = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
})

export default filtersReducer.reducer
