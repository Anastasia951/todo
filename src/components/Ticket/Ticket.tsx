import React from 'react'
import cn from 'classnames'
import styles from './Ticket.module.scss'
import { TId } from '../../store/tickets/ticketsReducer'
import { useSelector } from 'react-redux'
import { getTicketById } from '../../store/tickets/ticketsSelectors'
import { Link } from 'react-router-dom'
import { Tag } from '../Tag/Tag'
import hasDescription from '../../assets/description.svg'
import hasComments from '../../assets/comments.svg'
interface ITicketProps {
  ticketId: TId
}

export const Ticket = ({ ticketId }: ITicketProps) => {
  const { title, description, tags, commentsIds } = useSelector(
    getTicketById(ticketId)
  )
  return (
    <div className={cn(styles.ticket)}>
      <h5 className={cn(styles.title)}>{title}</h5>
      <Link className={cn(styles.link)} to={`/full/${ticketId}`}>
        <span className={cn(styles.openTicket)}></span>
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
