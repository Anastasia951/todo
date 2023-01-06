import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import { CreateTicket } from './CreateTicket/CreateTicket'
import styles from './ModalWrapper.module.scss'
import close from '../../assets/close.svg'
import { Link } from 'react-router-dom'
import { EditTicket } from './EditTIcket/EditTicket'
interface ModalWrapper {
  type: string
}
export const ModalWrapper = ({ type }: ModalWrapper) => {
  let Element = CreateTicket
  switch (type) {
    case 'create': {
      Element = CreateTicket
      break
    }
    case 'edit': {
      Element = EditTicket
      break
    }
    default: {
      Element = CreateTicket
    }
  }
  const [isDOMReady, setIsDOMReady] = useState(false)
  useEffect(() => {
    setIsDOMReady(true)
  }, [])
  let container = isDOMReady ? document.querySelector('.modal-container') : null
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
