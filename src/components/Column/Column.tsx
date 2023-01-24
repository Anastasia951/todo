import React from 'react'
import cn from 'classnames'
import styles from './Column.module.scss'
import { useSelector } from 'react-redux'
import {
  getFilteredTickets,
  getTicketsByType,
} from '../../store/tickets/ticketsSelectors'
import { Ticket } from '../Ticket/Ticket'
import { Button } from '../Button/Button'
import { useRedirect } from '../../hooks/useRedirect'
import { IFiltersState } from '../../store/filters/filtersReducer'

interface IColumnProps {
  title: string
  type?: 'todo' | 'inProgress' | 'done'
  filters: IFiltersState
}

export const Column = ({
  title = '',
  type = 'todo',
  filters,
}: IColumnProps) => {
  let ticketsIds = useSelector(getTicketsByType(type))
  ticketsIds = useSelector(getFilteredTickets(ticketsIds, filters))
  const redirect = useRedirect('create', { type })
  return (
    <div className={cn(styles.column)}>
      <h4 className={cn(styles.title)}>{title}</h4>
      <div className={cn(styles.bordered)}>
        <div className={cn(styles.tickets)}>
          {ticketsIds.map(id => (
            <Ticket ticketId={id} key={id} />
          ))}
        </div>
        {type !== 'done' && (
          <Button onClick={redirect} variant='primary'>
            <span className={styles.plus}>+</span> Добавить тикет
          </Button>
        )}
      </div>
    </div>
  )
}
