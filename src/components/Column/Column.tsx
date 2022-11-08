import React from 'react'
import cn from 'classnames'
import styles from './Column.module.scss'
import { TFilter } from '../../store/filters/filtersReducer'

interface IColumnProps {
  title: string
  type?: TFilter
}

export const Column = ({ title, type }: IColumnProps) => {
  return (
    <div className={cn(styles.column)}>
      <h4>{title}</h4>
      <div className={cn(styles.tasks)}></div>
    </div>
  )
}
