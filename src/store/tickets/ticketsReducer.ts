import { v4 as uuid } from 'uuid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITicket, TTicketType } from '../../models/TStore'
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

interface IDragTickets {
  startColumn: TTicketType
  endColumn: TTicketType
  droppableId: string
  draggableId: string
  isBottomHalf: boolean
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
    pushCommentId(
      state,
      { payload }: PayloadAction<{ ticketId: string; commentId: string }>
    ) {
      const { ticketId, commentId } = payload
      state.tickets[ticketId].commentsIds?.push(commentId)
    },
    saveTickets(state, { payload }: PayloadAction<any>) {
      for (let key in payload) {
        // @ts-ignore
        state[key] = payload[key]
      }
    },

    dragTicket(state, { payload }: PayloadAction<IDragTickets>) {
      const { draggableId, droppableId, endColumn, startColumn, isBottomHalf } =
        payload
      let curIndex = state[startColumn].findIndex(el => el === draggableId)
      state[startColumn].splice(curIndex, 1)
      state.tickets[draggableId].type = endColumn
      let indexBefore = state[endColumn].findIndex(el => el === droppableId)
      if (isBottomHalf) indexBefore++
      state[endColumn].splice(indexBefore, 0, draggableId)
    },

    deleteTicket(
      state,
      { payload }: PayloadAction<{ id: string; type: TTicketType }>
    ) {
      const { id, type } = payload
      delete state.tickets[id]
      state[type] = state[type].filter(el => el !== id)
    },
  },
})

export const {
  createTicket,
  editTicket,
  saveTickets,
  pushCommentId,
  dragTicket,
  deleteTicket,
} = ticketsReducer.actions
export default ticketsReducer.reducer
