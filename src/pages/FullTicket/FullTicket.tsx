import React, { useState } from 'react'
import styles from './FullTicket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import { getTicketById } from '../../store/tickets/ticketsSelectors'
import { Input } from '../../components/Input/Input'
import { Tag } from '../../components/Tag/Tag'
import { Comment } from '../../components/Comment/Comment'
import BackToTask from '../../assets/back_to_task.svg'
import { Button } from '../../components/Button/Button'
import { Popup } from '../../components/Popup/Popup'
import { useFormik } from 'formik'
import { ITicket } from '../../models/TStore'
import { useRedirect } from '../../hooks/useRedirect'
import { editTicket } from '../../store/tickets/ticketsReducer'

export type formMode = 'delete' | 'editing' | 'default'

export const FullTicket = () => {
  const dispatch = useDispatch()
  const [isOpened, setIsOpened] = useState(false)
  const [mode, setMode] = useState<formMode>('default')
  const { id } = useParams() as { id: string }
  const ticket = useSelector(getTicketById(id))
  const redirect = useRedirect(`/full/${id}/comment/create`)

  const formik = useFormik<ITicket>({
    initialValues: {
      title: ticket?.title || '',
      description: ticket?.description || '',
      tags: ticket?.tags || [],
      type: ticket?.type || 'todo',
      commentsIds: ticket?.commentsIds || [],
    },
    enableReinitialize: true,
    onSubmit: values => {
      dispatch(editTicket({ ...values, id }))
      setMode('default')
    },
  })
  if (!ticket) return <></>
  function togglePopup() {
    setIsOpened(p => !p)
  }
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.link} to='/'>
          <img src={BackToTask} alt='Back to tasks' />
          Вернуться к задачам
        </Link>
      </nav>
      <header className={styles.header}>
        <h4 className={styles.title}>{ticket.title}</h4>
        <Button onClick={togglePopup} variant='dots' />
        {isOpened && (
          <Popup mode={mode} setMode={setMode} onClose={togglePopup} />
        )}
      </header>
      <form className={styles.ticket} onSubmit={formik.handleSubmit}>
        <Input
          name='title'
          onChange={formik.handleChange}
          readOnly={mode === 'default'}
          value={formik.values.title}
        />
        <Input
          name='description'
          onChange={formik.handleChange}
          readOnly={mode === 'default'}
          value={formik.values.description}
          multiline
        />
        <div className={styles.colors}>
          {formik.values.tags.map(color => (
            <Tag color={color} key={color} />
          ))}
        </div>

        {formik.values.commentsIds && (
          <div className={styles.comments}>
            {formik.values.commentsIds.map(id => (
              <Comment id={id} key={id} />
            ))}
          </div>
        )}

        {mode === 'editing' && (
          <>
            <Button
              type='button'
              onClick={redirect}
              variant='default'
              className={styles.addComment}>
              Добавить комментарий
            </Button>
            <Button variant='primary' type='submit'>
              Сохранить
            </Button>
          </>
        )}
      </form>

      <Outlet />
    </div>
  )
}
