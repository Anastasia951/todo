import { v4 as uuid } from 'uuid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TId } from '../tickets/ticketsReducer'

interface IComment {
  text: string
  author: string
  ticketId: TId
}
interface ICommentsState {
  comments: Record<TId, IComment>
}

const initialState: ICommentsState = {
  comments: {
    sdsd: {
      text: 'ewrwerwer',
      author: 'me',
      ticketId: 'xqws',
    },
    sddff: {
      text: 'asdasd',
      author: 'me',
      ticketId: 'xqws',
    },
  },
}

const commentsReducer = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, { payload }: PayloadAction<IComment>) {
      let commentId = uuid()
      state.comments[commentId] = payload
    },
  },
})

export default commentsReducer.reducer
