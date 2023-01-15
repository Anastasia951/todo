import defaultStyles from '../Modal.module.scss'
import modalStyles from './EditTicket.module.scss'
import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'
import { MultiSelect } from '../../MultiSelect/MultiSelect'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketById } from '../../../store/tickets/ticketsSelectors'
import { useFormik } from 'formik'
import { editTicket, ITicket } from '../../../store/tickets/ticketsReducer'
import { useRedirect } from '../../../hooks/useRedirect'
import * as Yup from 'yup'
const styles = Object.assign(modalStyles, defaultStyles)

export const EditTicket = () => {
  const dispatch = useDispatch()
  let { id } = useParams() as { id: string }
  const ticket = useSelector(getTicketById(id))
  const redirect = useRedirect('/')
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
  })
  const formik = useFormik<ITicket>({
    initialValues: {
      id,
      title: ticket.title,
      description: ticket.description,
      tags: ticket.tags,
      commentsIds: ticket.commentsIds,
    },
    validationSchema,
    onSubmit: values => {
      dispatch(editTicket({ ...values, id }))
      redirect()
    },
  })
  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Редактировать тикет</h4>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Input
          name='title'
          onChange={formik.handleChange}
          fullWidth
          value={formik.values.title}
        />
        <Input
          name='description'
          onChange={formik.handleChange}
          fullWidth
          value={formik.values.description}
          multiline
        />
        <MultiSelect formik={formik} values={formik.values.tags} />
        <Button variant='primary' type='submit'>
          Сохранить
        </Button>
      </form>
    </div>
  )
}
