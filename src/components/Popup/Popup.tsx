import React from 'react'
import styles from './Popup.module.scss'
import close from '../../assets/close.svg'
import { Button } from '../Button/Button'
import { formMode } from '../../pages/FullTicket/FullTicket'

interface IPopupProps {
  onClose: () => void
  setMode: (param: formMode) => void
}

export const Popup = ({ onClose, setMode }: IPopupProps) => {
  function closePopup(mode: formMode) {
    setMode(mode)
    onClose()
  }
  return (
    <div className={styles.popup}>
      <Button className={styles.close} variant='default' onClick={onClose}>
        <img src={close} alt='close popup' />
      </Button>
      <Button
        variant='default'
        onClick={() => closePopup('delete')}
        className={styles.elem}>
        Удалить
      </Button>
      <Button
        variant='default'
        onClick={() => closePopup('editing')}
        className={styles.elem}>
        Редактировать
      </Button>
    </div>
  )
}
