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
  onChange,
  value,
  checked = false,
  ...options
}: ICheckboxProps) => {
  return (
    <label className={cn(styles.label)}>
      {contentOnLeft && children}
      <input
        checked={checked}
        value={value}
        onChange={onChange}
        className={cn(styles.input)}
        {...options}
        type='checkbox'
      />
      {!contentOnLeft && children}
    </label>
  )
}
