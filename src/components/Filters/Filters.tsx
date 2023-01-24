import React, { useEffect } from 'react'
import cn from 'classnames'
import styles from './Filters.module.scss'
import { Checkbox } from '../Checkbox/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { changeField, TFilter } from '../../store/filters/filtersReducer'
import { getFilters } from '../../store/filters/filtersSelector'
import { useNavigate } from 'react-router-dom'

export const Filters = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const filters = useSelector(getFilters())
  const switchFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    dispatch(changeField(name as TFilter))
  }

  useEffect(() => {
    let keys = Object.keys(filters) as TFilter[]
    let path = keys.map(el => `${el}=${filters[el]}`).join('&')

    navigate(`/?filters=${path}`)
  }, [filters])

  return (
    <div className={cn(styles.filters)}>
      <Checkbox
        checked={filters.comment}
        name='comment'
        onChange={switchFilter}>
        Комментарий
      </Checkbox>
      <Checkbox
        checked={filters.description}
        name='description'
        onChange={switchFilter}>
        Описание
      </Checkbox>
      <Checkbox checked={filters.tag} name='tag' onChange={switchFilter}>
        Тег
      </Checkbox>
    </div>
  )
}
