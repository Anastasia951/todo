import { IFiltersState } from '../filters/filtersReducer'
import { AppState } from '../store'
import { TId } from './ticketsReducer'

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

export const getTicketsByType =
  (type: 'todo' | 'inProgress' | 'done') => (state: AppState) => {
    if (type === 'todo') return getTodoTicketsIds(state)
    if (type === 'inProgress') return getInProgressTicketsIds(state)
    if (type === 'done') return getDoneTicketsIds(state)

    return getAllTicketsIds(state)
  }

export const getFilteredTickets =
  (ticketsIds: string[], filters: IFiltersState) => (state: AppState) => {
    let tickets = state.tickets.tickets
    return ticketsIds.filter(id => {
      if (filters.description && !tickets[id].description) return false
      if (filters.comment && !tickets[id].commentsIds.length) return false
      if (filters.tag && !tickets[id].tags.length) return false
      return true
    })
  }
