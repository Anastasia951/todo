import * as Yup from 'yup'
import cn from 'classnames'
import defaultStyles from '../Modal.module.scss'
import modalStyles from './CreateTicket.module.scss'
import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'
import { MultiSelect } from '../../MultiSelect/MultiSelect'
import { createTicket } from '../../../store/tickets/ticketsReducer'
import { useDispatch } from 'react-redux'
import { useRedirect } from '../../../hooks/useRedirect'
import { useFormik } from 'formik'
import { useLocation } from 'react-router-dom'
const styles = Object.assign(modalStyles, defaultStyles)

export const CreateTicket = () => {
  const redirect = useRedirect('/')
  const dispatch = useDispatch()
  const { state } = useLocation()

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
  })
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(
        createTicket({
          ...values,
          tags: [],
          commentsIds: [],
          type: state?.type,
        })
      )
      redirect()
    },
  })

  console.log(styles)
  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Создать тикет</h4>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Input
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          fullWidth
          placeholder='Название'
          className={cn({
            [styles.required]: formik.touched.title && formik.errors.title,
          })}
        />
        <Input
          name='description'
          value={formik.values.description}
          onChange={formik.handleChange}
          fullWidth
          placeholder='Описание'
          multiline
        />
        <MultiSelect />
        <Button variant='primary' type='submit'>
          Сохранить
        </Button>
      </form>
    </div>
  )
}
