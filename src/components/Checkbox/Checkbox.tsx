import React from 'react'
import cn from 'classnames'
import styles from './Checkbox.module.scss'

interface ICheckboxProps extends React.HTMLProps<HTMLInputElement> {
  children: React.ReactNode
  contentOnLeft?: boolean
}

export const Checkbox = ({
  children,
  contentOnLeft = false,
  checked = false,
  ...options
}: ICheckboxProps) => {
  return (
    <label className={cn(styles.label)}>
      {contentOnLeft && children}
      <input className={cn(styles.input)} type='checkbox' {...options} />
      {!contentOnLeft && children}
    </label>
  )
}
