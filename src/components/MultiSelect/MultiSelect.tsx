import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Checkbox } from '../Checkbox/Checkbox'
import { Tag } from '../Tag/Tag'
import dropdown from '../../assets/dropdown.svg'
import styles from './MultiSelect.module.scss'
import cn from 'classnames'
const colors = [
  'violet',
  'green',
  'red',
  'lightBlue',
  'orange',
  'lightGreen',
  'darkBlue',
  'yellow',
]

interface IMultiSelectProps {
  formik?: any
  values?: string[]
}

export const MultiSelect = ({ formik, values = [] }: IMultiSelectProps) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div className={styles.multiSelect}>
      <Button
        type='button'
        onClick={() => setIsOpened(p => !p)}
        className={cn(styles.dropdown, {
          [styles.opened]: isOpened,
        })}
        variant='gray'>
        Выбрать тег
        <span>
          <img src={dropdown} alt='dropdown' />
        </span>
      </Button>
      <div
        className={cn(styles.wrapper, {
          [styles.visible]: isOpened,
        })}>
        <div className={styles.scroll}>
          <ul className={styles.list}>
            {colors.map(color => (
              <li key={color} className={styles.item}>
                <Checkbox
                  onChange={formik.handleChange}
                  name='tags'
                  value={color}
                  checked={values.includes(color)}
                  contentOnLeft>
                  <Tag color={color} />
                </Checkbox>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
