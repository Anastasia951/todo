import { AppState } from '../store'
import { TId } from '../tickets/ticketsReducer'

export const getCommentById = (id: TId) => (state: AppState) =>
  state.comments.comments[id]
