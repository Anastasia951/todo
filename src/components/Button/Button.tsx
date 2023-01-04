import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
interface ButtonProps {
  children?: React.ReactNode
  type: string
}

export function Button({ children, type = 'default' }: ButtonProps) {
  return <button className={cn(styles.button, styles[type])}>{children}</button>
}
