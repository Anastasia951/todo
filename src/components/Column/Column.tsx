import React from 'react'
import cn from 'classnames'
import styles from './Column.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  getFilteredTickets,
  getTicketsByType,
} from '../../store/tickets/ticketsSelectors'
import { Ticket } from '../Ticket/Ticket'
import { Button } from '../Button/Button'
import { useRedirect } from '../../hooks/useRedirect'
import { IFiltersState } from '../../store/filters/filtersReducer'
import { TTicketType } from '../../models/TStore'
import { dragTicket } from '../../store/tickets/ticketsReducer'

interface IColumnProps {
  title: string
  type?: TTicketType
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
  const dispatch = useDispatch()

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    return false
  }

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const nearest = target.closest(`[id]`)

    if (nearest) {
      let { top, bottom } = nearest?.getBoundingClientRect()
      let isBottomHalf = e.pageY > (bottom + top) / 2
      const droppableId = nearest?.id
      const draggableId = e.dataTransfer.getData('draggableId')
      const startColumn = e.dataTransfer.getData(
        'draggableColumn'
      ) as TTicketType
      const endColumn = type

      if (droppableId && draggableId && startColumn && endColumn) {
        dispatch(
          dragTicket({
            draggableId,
            droppableId,
            startColumn,
            endColumn,
            isBottomHalf,
          })
        )
      }
    }
  }

  return (
    <div
      className={cn(styles.column)}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}>
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
