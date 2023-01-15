import { v4 as uuid } from 'uuid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type TId = string
export interface ITicket {
  id?: TId
  title: string
  description: string
  tags: string[]
  commentsIds: string[]
  type?: 'todo' | 'inProgress'
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
      // id: '',
      title: 'jkjkj',
      description: 'Description',
      tags: ['yellow', 'green', 'red', 'violet', 'lightBlue'],
      commentsIds: ['sdsd', 'sddff'],
    },
    adfv: {
      // id: '',

      title: 'dfdfd',
      description: 'Description',
      tags: ['yellow', 'green'],
      commentsIds: [],
    },
    wefv: {
      // id: '',

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
const ticketsReducer = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    createTicket(state, { payload }: PayloadAction<ITicket>) {
      let id = uuid()
      state.tickets[id] = payload
      if (payload.type === 'inProgress') {
        state.inProgress.push(id)
      } else {
        state.todo.push(id)
      }
    },
    editTicket(state, { payload }: PayloadAction<ITicket & { id: string }>) {
      let { id, ...ticket } = payload

      state.tickets[id] = { ...ticket, type: state.tickets[id].type }
    },
  },
})

export const { createTicket, editTicket } = ticketsReducer.actions
export default ticketsReducer.reducer
