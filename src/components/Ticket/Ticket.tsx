import React from 'react'
import cn from 'classnames'
import styles from './Ticket.module.scss'
import { TId } from '../../store/tickets/ticketsReducer'
import { useSelector } from 'react-redux'
import { getTicketById } from '../../store/tickets/ticketsSelectors'

interface ITicketProps {
  ticketId: TId
}

export const Ticket = ({ ticketId }: ITicketProps) => {
  const { title, description, tags, commentsIds } = useSelector(
    getTicketById(ticketId)
  )
  return <div className={cn(styles.ticket)}>{title}</div>
}
