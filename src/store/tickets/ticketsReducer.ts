import { v4 as uuid } from 'uuid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INewTicket, ITicket } from '../../models/TStore'
export type TId = string

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
const ticketsReducer = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    createTicket(state, { payload }: PayloadAction<ITicket>) {
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
    pushCommentId(
      state,
      { payload }: PayloadAction<{ ticketId: string; commentId: string }>
    ) {
      const { ticketId, commentId } = payload
      console.log(ticketId, commentId)
      state.tickets[ticketId].commentsIds?.push(commentId)
    },
    saveTickets(state, { payload }: PayloadAction<any>) {
      for (let key in payload) {
        // @ts-ignore
        state[key] = payload[key]
      }
    },
  },
})

export const { createTicket, editTicket, saveTickets, pushCommentId } =
  ticketsReducer.actions
export default ticketsReducer.reducer
