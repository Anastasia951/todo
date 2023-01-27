import * as Yup from 'yup'
import { v4 as uuid } from 'uuid'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useRedirect } from '../../../hooks/useRedirect'
import { addComment, IComment } from '../../../store/comments/commentsReducer'
import { pushCommentId } from '../../../store/tickets/ticketsReducer'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import styles from './CreateComment.module.scss'
export const CreateComment = () => {
  const dispatch = useDispatch()
  const { id } = useParams() as { id: string }
  const redirect = useRedirect(`/full/${id}`)

  const validationSchema = Yup.object().shape({
    author: Yup.string().required().min(2).max(50),
    text: Yup.string().required().min(2).max(100),
  })
  const formik = useFormik<IComment>({
    initialValues: {
      author: '',
      text: '',
      ticketId: id,
    },
    validateOnMount: true,
    validationSchema,
    onSubmit: values => {
      let commentId = uuid()
      dispatch(addComment({ ...values, commentId }))
      dispatch(pushCommentId({ ticketId: values.ticketId, commentId }))
      redirect()
    },
  })
  return (
    <>
      <h4 className={styles.title}>Добавить комментарий</h4>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Input
          value={formik.values.author}
          onChange={formik.handleChange}
          name='author'
          placeholder='Имя'
        />
        <Input
          value={formik.values.text}
          onChange={formik.handleChange}
          name='text'
          placeholder='Комментарий'
          multiline
        />
        <Button
          disabled={!formik.isValid}
          className={styles.submit}
          type='submit'
          variant='primary'>
          Сохранить
        </Button>
      </form>
    </>
  )
}
