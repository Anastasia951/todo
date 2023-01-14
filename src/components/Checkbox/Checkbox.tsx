import React from 'react'
import cn from 'classnames'
import styles from './Checkbox.module.scss'

interface ICheckboxProps extends React.HTMLProps<HTMLInputElement> {
  children: React.ReactNode
  formik?: any
  contentOnLeft?: boolean
}

export const Checkbox = ({
  children,
  contentOnLeft = false,
  formik,
  value,
  ...options
}: ICheckboxProps) => {
  return (
    <label className={cn(styles.label)}>
      {contentOnLeft && children}
      <input
        value={value}
        onChange={formik?.handleChange}
        className={cn(styles.input)}
        {...options}
        type='checkbox'
      />
      {!contentOnLeft && children}
    </label>
  )
}
