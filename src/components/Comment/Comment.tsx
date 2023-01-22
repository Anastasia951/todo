import React from 'react'
import { useSelector } from 'react-redux'
import { getCommentById } from '../../store/comments/commentsSelector'
import { TId } from '../../store/tickets/ticketsReducer'
import styles from './Comment.module.scss'

interface IComentProps {
  id: TId
}

export const Comment = ({ id }: IComentProps) => {
  const comment = useSelector(getCommentById(id))
  if (!comment) return <></>
  return (
    <div className={styles.comment}>
      <h4 className={styles.author}>{comment.author}</h4>
      <p className={styles.text}>{comment.text}</p>
    </div>
  )
}
