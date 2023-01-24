import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import { CreateTicket } from './CreateTicket/CreateTicket'
import styles from './ModalWrapper.module.scss'
import close from '../../assets/close.svg'
import { Link, useNavigate } from 'react-router-dom'
import { EditTicket } from './EditTIcket/EditTicket'
import { CreateComment } from './CreateComment/CreateComment'
import { Button } from '../Button/Button'

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
    case 'commentCreate': {
      Element = CreateComment
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
  const navigate = useNavigate()
  let container = isDOMReady ? document.querySelector('.modal-container') : null
  return (
    container &&
    ReactDOM.createPortal(
      <div className={styles.container}>
        <div className={styles.content}>
          <Element />
          <Button
            variant='default'
            onClick={() => {
              navigate(-1)
            }}
            className={styles.close}>
            <img src={close} alt='close modal' />
          </Button>
        </div>
      </div>,
      container
    )
  )
}
