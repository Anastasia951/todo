import React from 'react'
import cn from 'classnames'
import styles from './Filters.module.scss'
import { Checkbox } from '../Checkbox/Checkbox'

export const Filters = () => {
  return (
    <div className={cn(styles.filters)}>
      <Checkbox>Комментарий</Checkbox>
      <Checkbox>Описание</Checkbox>
      <Checkbox>Тег</Checkbox>
    </div>
  )
}
