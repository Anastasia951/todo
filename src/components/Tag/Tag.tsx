import React from 'react'
import cn from 'classnames'
import styles from './Tag.module.scss'
import { TColor } from '../../models/TStore'
import deleteTag from '../../assets/deleteTag.svg'
interface ITagProps {
  color: TColor
  editable?: boolean
  onDelete?: (color: TColor) => void
}

export const Tag = ({
  color,
  editable,
  onDelete = () => {},
  ...options
}: ITagProps) => {
  return (
    <div
      className={cn(styles.tag, styles[color], {
        [styles.editable]: editable,
      })}
      {...options}>
      {editable && (
        <img src={deleteTag} onClick={() => onDelete(color)} alt='delete tag' />
      )}
    </div>
  )
}
