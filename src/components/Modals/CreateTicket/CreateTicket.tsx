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
import { ITicket } from '../../../models/TStore'
const styles = Object.assign(modalStyles, defaultStyles)

export const CreateTicket = () => {
  const redirect = useRedirect('/')
  const dispatch = useDispatch()
  const { state } = useLocation()
  console.log('render form')

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(3),
  })
  const formik = useFormik<ITicket>({
    initialValues: {
      title: '',
      description: '',
      tags: [],
      type: state.type,
      commentsIds: [],
    },
    validateOnMount: true,
    validationSchema,
    onSubmit: values => {
      dispatch(
        createTicket({
          ...values,
          type: state.type,
        })
      )
      redirect()
    },
  })
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
        />
        <Input
          name='description'
          value={formik.values.description}
          onChange={formik.handleChange}
          fullWidth
          placeholder='Описание'
          multiline
        />
        <MultiSelect formik={formik} values={formik.values.tags} />
        <Button disabled={!formik.isValid} variant='primary' type='submit'>
          Сохранить
        </Button>
      </form>
    </div>
  )
}
