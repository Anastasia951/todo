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
  className,
  ...props
}: Partial<IInputProps>) => {
  if (multiline) {
    return (
      <textarea
        rows={5}
        className={cn([className], styles.input, styles.multiline, {
          [styles.fullWidth]: fullWidth,
        })}
        {...props}
      />
    )
  }
  return (
    <input
      {...props}
      className={cn([className], styles.input, styles.oneline, {
        [styles.fullWidth]: fullWidth,
      })}
    />
  )
}
