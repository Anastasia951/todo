import React from 'react'
import cn from 'classnames'
import styles from './Filters.module.scss'
import { Checkbox } from '../Checkbox/Checkbox'
import { useDispatch } from 'react-redux'
import { changeField, TFilter } from '../../store/filters/filtersReducer'

export const Filters = () => {
  const dispatch = useDispatch()
  const switchFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    dispatch(changeField(name as TFilter))
  }
  return (
    <div className={cn(styles.filters)}>
      <Checkbox name={'comment'} onChange={switchFilter}>
        Комментарий
      </Checkbox>
      <Checkbox name={'description'} onChange={switchFilter}>
        Описание
      </Checkbox>
      <Checkbox name={'tag'} onChange={switchFilter}>
        Тег
      </Checkbox>
    </div>
  )
}
