import React, { useEffect } from 'react'
import cn from 'classnames'

import { Filters } from '../../components/Filters/Filters'
import styles from './Home.module.scss'
import { Column } from '../../components/Column/Column'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFilters } from '../../store/filters/filtersSelector'
import { saveFilters } from '../../store/filters/filtersReducer'

export const Home = () => {
  const dispatch = useDispatch()
  const { search } = useLocation()
  console.log('render')
  useEffect(() => {
    const url = new URLSearchParams(search)
    const comment = url.get('comment') === 'true'
    const tag = url.get('tag') === 'true'
    const description = url.get('descritpion') === 'true'

    dispatch(saveFilters({ comment, tag, description }))
  }, [])
  const filters = useSelector(getFilters())

  return (
    <div className={cn(styles.container)}>
      <Filters />
      <main className={cn(styles.columns)}>
        <Column title='Todo' type='todo' filters={filters} />
        <Column title='In Progress' type='inProgress' filters={filters} />
        <Column title='Done' type='done' filters={filters} />
      </main>
      <Outlet />
    </div>
  )
}
