import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
interface ButtonProps {
  children?: React.ReactNode
  variant: string
  onClick?: () => void
}

export function Button({
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={cn(styles.button, styles[variant])}>
      {children}
    </button>
  )
}
