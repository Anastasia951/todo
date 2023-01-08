import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string
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
