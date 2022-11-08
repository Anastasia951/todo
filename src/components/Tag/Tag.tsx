import React from 'react'
import cn from 'classnames'
import styles from './Tag.module.scss'

interface ITagProps {
  color: string
}

export const Tag = ({ color, ...options }: ITagProps) => {
  return <div className={cn(styles.tag, styles[color])} {...options}></div>
}
