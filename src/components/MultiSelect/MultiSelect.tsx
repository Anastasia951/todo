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
}

export const MultiSelect = ({ formik }: IMultiSelectProps) => {
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
      {isOpened && (
        <div className={styles.wrapper}>
          <div className={styles.scroll}>
            <ul className={styles.list}>
              {colors.map(color => (
                <li key={color} className={styles.item}>
                  <Checkbox
                    formik={formik}
                    name='tags'
                    value={color}
                    contentOnLeft>
                    <Tag color={color} />
                  </Checkbox>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
