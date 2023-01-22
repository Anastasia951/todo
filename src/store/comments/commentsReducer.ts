import { v4 as uuid } from 'uuid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TId } from '../tickets/ticketsReducer'

export interface IComment {
  text: string
  author: string
  ticketId: TId
}
export interface ICommentsState {
  comments: Record<TId, IComment>
}

const initialState: ICommentsState = {
  comments: {
    // sdsd: {
    //   text: 'ewrwerwer',
    //   author: 'me',
    //   ticketId: 'xqws',
    // },
    // sddff: {
    //   text: 'asdasd',
    //   author: 'me',
    //   ticketId: 'xqws',
    // },
  },
}

const commentsReducer = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(
      state,
      { payload }: PayloadAction<IComment & { commentId: string }>
    ) {
      state.comments[payload.commentId] = payload
    },
    saveComments(state, { payload }: PayloadAction<ICommentsState>) {
      for (let key in payload) {
        //@ts-ignore
        state[key] = payload[key]
      }
      // state = payload
    },
  },
})

export default commentsReducer.reducer
export const { addComment, saveComments } = commentsReducer.actions
