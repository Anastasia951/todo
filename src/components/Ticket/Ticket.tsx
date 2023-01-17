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
  const redirect = useRedirect(`full/${ticketId}`)
  const { title, description, tags, commentsIds } = useSelector(
    getTicketById(ticketId)
  )
  return (
    <Link to={`edit/${ticketId}`} className={cn(styles.ticket)}>
      <h5 className={cn(styles.title)}>{title}</h5>
      <Button className={styles.link} onClick={redirect} variant='dots' />
      <div className={cn(styles.tags)}>
        {tags.map(color => (
          <Tag color={color} key={color} />
        ))}
      </div>
      <div className={cn(styles.info)}>
        {description && <img src={hasDescription} alt='has description' />}
        {Boolean(commentsIds) && <img src={hasComments} alt='has comments' />}
      </div>
    </Link>
  )
}
