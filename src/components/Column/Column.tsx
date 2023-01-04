import React from 'react'
import cn from 'classnames'
import styles from './Column.module.scss'
import { useSelector } from 'react-redux'
import { getTicketsByType } from '../../store/tickets/ticketsSelectors'
import { Ticket } from '../Ticket/Ticket'
import { Button } from '../Button/Button'

interface IColumnProps {
  title: string
  type?: 'todo' | 'inProgress' | 'done'
}

export const Column = ({ title = '', type = 'todo' }: IColumnProps) => {
  const tikcetsIds = useSelector(getTicketsByType(type))
  return (
    <div className={cn(styles.column)}>
      <h4 className={cn(styles.title)}>{title}</h4>
      <div className={cn(styles.bordered)}>
        <div className={cn(styles.tickets)}>
          {tikcetsIds.map(id => (
            <Ticket ticketId={id} key={id} />
          ))}
        </div>
        {type !== 'done' && (
          <Button type='add-ticket'>
            <span className={styles.plus}>+</span> Добавить тикет
          </Button>
        )}
      </div>
    </div>
  )
}
