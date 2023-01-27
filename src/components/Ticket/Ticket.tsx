import React, { useEffect, useRef } from 'react'
import cn from 'classnames'
import styles from './Ticket.module.scss'
import { dragTicket, TId } from '../../store/tickets/ticketsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketById } from '../../store/tickets/ticketsSelectors'
import { Link } from 'react-router-dom'
import { Tag } from '../Tag/Tag'
import hasDescription from '../../assets/description.svg'
import hasComments from '../../assets/comments.svg'
import { Button } from '../Button/Button'

interface ITicketProps {
  ticketId: TId
}

export const Ticket = ({ ticketId }: ITicketProps) => {
  const { title, description, tags, commentsIds, type } = useSelector(
    getTicketById(ticketId)
  )
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData('draggableId', ticketId)
    e.dataTransfer.setData('draggableColumn', type)
  }
  return (
    <div
      className={cn(styles.ticket)}
      onDragStart={dragStartHandler}
      id={ticketId}
      draggable>
      <Link
        aria-label='Edit ticket'
        to={`edit/${ticketId}`}
        className={styles.overlay}
      />
      <h5 className={cn(styles.title)}>{title}</h5>
      <Link
        className={styles.link}
        aria-label='Full ticket page'
        to={`full/${ticketId}`}>
        <Button variant='dots' />
      </Link>
      <div className={cn(styles.tags)}>
        {tags.map(color => (
          <Tag color={color} key={color} />
        ))}
      </div>
      <div className={cn(styles.info)}>
        {description && <img src={hasDescription} alt='has description' />}
        {Boolean(commentsIds.length) && (
          <img src={hasComments} alt='has comments' />
        )}
      </div>
    </div>
  )
}
