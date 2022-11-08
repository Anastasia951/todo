import React from 'react'

interface ICheckboxProps {
  children: React.ReactNode
}

export const Checkbox = ({ children }: ICheckboxProps) => {
  return (
    <label>
      <input type='checkbox' />
      {children}
    </label>
  )
}
