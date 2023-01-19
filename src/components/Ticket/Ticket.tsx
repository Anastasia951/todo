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
import { Button } from '../Button/Button'
import { useRedirect } from '../../hooks/useRedirect'
interface ITicketProps {
  ticketId: TId
}

export const Ticket = ({ ticketId }: ITicketProps) => {
  const { title, description, tags, commentsIds } = useSelector(
    getTicketById(ticketId)
  )
  return (
    <div className={cn(styles.ticket)}>
      <Link to={`edit/${ticketId}`} className={styles.overlay} />
      <h5 className={cn(styles.title)}>{title}</h5>
      <Link className={styles.link} to={`full/${ticketId}`}>
        <Button variant='dots' />
      </Link>
      <div className={cn(styles.tags)}>
        {tags.map(color => (
          <Tag color={color} key={color} />
        ))}
      </div>
      <div className={cn(styles.info)}>
        {description && <img src={hasDescription} alt='has description' />}
        {Boolean(commentsIds) && <img src={hasComments} alt='has comments' />}
      </div>
    </div>
  )
}
