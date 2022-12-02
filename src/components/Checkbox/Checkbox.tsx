import React from 'react'
import cn from 'classnames'
import styles from './Checkbox.module.scss'
interface ICheckboxProps extends React.HTMLProps<HTMLInputElement> {
  children: React.ReactNode
  isContentOnLeft?: boolean
}

export const Checkbox = ({
  children,
  isContentOnLeft = false,
  ...options
}: ICheckboxProps) => {
  return (
    <label className={cn(styles.label)}>
      {isContentOnLeft && children}
      <input className={cn(styles.input)} {...options} type='checkbox' />
      {!isContentOnLeft && children}
    </label>
  )
}
