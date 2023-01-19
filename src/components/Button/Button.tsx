import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'gray' | 'default' | 'dots'
}

export function Button({
  children,
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) {
  if (variant === 'dots') {
    return (
      <button
        {...props}
        className={cn(className, styles.button, styles[variant])}>
        <span className={styles.dot}></span>
      </button>
    )
  }
  return (
    <button
      {...props}
      className={cn(className, styles.button, styles[variant])}>
      {children}
    </button>
  )
}
