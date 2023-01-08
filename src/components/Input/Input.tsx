import React from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

interface IInputProps extends React.InputHTMLAttributes<HTMLElement> {
  multiline: boolean
  fullWidth: boolean
  placeholder: string
  value: string
}
export const Input = ({
  multiline = false,
  fullWidth = false,
  ...props
}: Partial<IInputProps>) => {
  if (multiline) {
    return (
      <textarea
        rows={5}
        className={cn(styles.input, styles.multiline, {
          [styles.fullWidth]: fullWidth,
        })}
        {...props}
      />
    )
  }
  return (
    <input
      {...props}
      className={cn(styles.input, styles.oneline, {
        [styles.fullWidth]: fullWidth,
      })}
    />
  )
}
