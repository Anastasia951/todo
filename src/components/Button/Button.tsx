import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'gray' | 'default'
}

export function Button({
  children,
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(className, styles.button, styles[variant])}>
      {children}
    </button>
  )
}
