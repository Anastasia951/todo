import ReactDOM from 'react-dom'
import { useMemo } from 'react'
import { CreateTicket } from './CreateTicket/CreateTicket'
import styles from './ModalWrapper.module.scss'
import close from '../../assets/close.svg'
import { Link } from 'react-router-dom'
interface ModalWrapper {
  type: string
}
export const ModalWrapper = ({ type }: ModalWrapper) => {
  const Element = CreateTicket
  const container = useMemo(
    () => document.querySelector('.modal-container'),
    []
  )
  return (
    container &&
    ReactDOM.createPortal(
      <div className={styles.container}>
        <div className={styles.content}>
          <Element />
          <Link to={'/'} className={styles.close}>
            <img src={close} alt='close modal' />
          </Link>
        </div>
      </div>,
      container
    )
  )
}
