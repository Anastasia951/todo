import { AppState } from '../store'
import { TFilter } from '../filters/filtersReducer'
import { ITicket, TId } from './ticketsReducer'
// import { createSelector } from 'reselect'
// export const getTodoTicketsIds = (state: AppState) => state.tickets.todo
export const getAllTicketsIds = (state: AppState) => [
  ...state.tickets.todo,
  ...state.tickets.inProgress,
  ...state.tickets.done,
]
export const getTodoTicketsIds = (state: AppState): TId[] => state.tickets.todo
export const getInProgressTicketsIds = (state: AppState): TId[] =>
  state.tickets.inProgress
export const getDoneTicketsIds = (state: AppState): TId[] => state.tickets.done

export const getTicketById = (id: TId) => (state: AppState) =>
  state.tickets.tickets[id]

export const getTicketsByType = (type: TFilter) => (state: AppState) => {
  if (type === 'todo') return getTodoTicketsIds(state)
  if (type === 'inProgress') return getInProgressTicketsIds(state)
  if (type === 'done') return getDoneTicketsIds(state)

  return getAllTicketsIds(state)
}
