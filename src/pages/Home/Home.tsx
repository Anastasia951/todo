import React from 'react'
import cn from 'classnames'

import { Filters } from '../../components/Filters/Filters'
import styles from './Home.module.scss'
import { Column } from '../../components/Column/Column'
export const Home = () => {
  return (
    <div className={cn(styles.container)}>
      <Filters />
      <div className={cn(styles.columns)}>
        <Column title='Todo' />
        <Column title='In Progress' />
        <Column title='Done' />
      </div>
    </div>
  )
}
