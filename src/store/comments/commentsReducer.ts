import { createSlice } from '@reduxjs/toolkit'
import { TId } from '../tickets/ticketsReducer'

interface IComment {
  text: string
  author: string[]
  ticketId: TId
}
interface ICommentsState {
  comments: Record<TId, IComment>
}

const initialState: ICommentsState = {
  comments: {},
}

const commentsReducer = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
})

export default commentsReducer.reducer
