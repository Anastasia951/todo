import React from 'react'
import cn from 'classnames'
import styles from './Column.module.scss'
import { TFilter } from '../../store/filters/filtersReducer'
import { useSelector } from 'react-redux'
import { getTicketsByType } from '../../store/tickets/ticketsSelectors'
import { Ticket } from '../Ticket/Ticket'

interface IColumnProps {
  title: string
  type?: TFilter
}

export const Column = ({ title = '', type = 'todo' }: IColumnProps) => {
  const tikcetsIds = useSelector(getTicketsByType(type))
  return (
    <div className={cn(styles.column)}>
      <h4>{title}</h4>
      <div className={cn(styles.tasks)}>
        {tikcetsIds.map(id => (
          <Ticket ticketId={id} key={id} />
        ))}
      </div>
    </div>
  )
}
