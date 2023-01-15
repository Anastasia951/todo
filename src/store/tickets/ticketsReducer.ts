import { v4 as uuid } from 'uuid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INewTicket, ITicket } from '../../models/TStore'
export type TId = string

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
      type: 'todo',
    },
    adfv: {
      title: 'dfdfd',
      description: 'Description',
      tags: ['yellow', 'green'],
      commentsIds: [],
      type: 'todo',
    },
    wefv: {
      title: 'dfdrerer',
      description: 'Description',
      tags: ['yellow', 'darkBlue'],
      commentsIds: [],
      type: 'inProgress',
    },
  },
  todo: ['xqws', 'adfv'],
  done: [],
  inProgress: ['wefv'],
}
const ticketsReducer = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    createTicket(state, { payload }: PayloadAction<INewTicket>) {
      let id = uuid()
      state.tickets[id] = { ...payload, commentsIds: [] }
      if (payload.type === 'inProgress') {
        state.inProgress.push(id)
      } else {
        state.todo.push(id)
      }
    },
    editTicket(state, { payload }: PayloadAction<INewTicket & { id: string }>) {
      let { id, ...ticket } = payload

      state.tickets[id] = { ...ticket, type: state.tickets[id].type }
    },
  },
})

export const { createTicket, editTicket } = ticketsReducer.actions
export default ticketsReducer.reducer
