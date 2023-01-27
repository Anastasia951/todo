import React, { useEffect } from 'react'
import cn from 'classnames'

import { Filters } from '../../components/Filters/Filters'
import styles from './Home.module.scss'
import { Column } from '../../components/Column/Column'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFilters } from '../../store/filters/filtersSelector'
import { IFiltersState, saveFilters } from '../../store/filters/filtersReducer'

export const Home = () => {
  const dispatch = useDispatch()
  const { search } = useLocation()
  useEffect(() => {
    const url = new URLSearchParams(search).get('filters')
    if (!url) return
    // @ts-ignore
    const filters: (keyof IFiltersState)[] = url.split('&') || []
    let result = {} as IFiltersState
    for (let f of filters) {
      result[f] = true
    }
    dispatch(saveFilters(result))
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
