import defaultStyles from '../Modal.module.scss'
import modalStyles from './EditTicket.module.scss'

import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'
import { MultiSelect } from '../../MultiSelect/MultiSelect'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketById } from '../../../store/tickets/ticketsSelectors'
import { useFormik } from 'formik'
import { editTicket } from '../../../store/tickets/ticketsReducer'
import { useRedirect } from '../../../hooks/useRedirect'
import * as Yup from 'yup'
import { ITicket, TColor } from '../../../models/TStore'
import { Tag } from '../../Tag/Tag'
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
      title: ticket.title,
      description: ticket.description,
      tags: ticket.tags,
      type: ticket.type,
      commentsIds: ticket.commentsIds,
    },
    validateOnMount: true,
    validationSchema,
    onSubmit: values => {
      dispatch(editTicket({ ...values, id }))
      redirect()
    },
  })

  function deleteTag(color: TColor) {
    formik.setFieldValue(
      'tags',
      formik.values.tags.filter(tag => tag !== color)
    )
  }
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
        {Boolean(formik.values.tags.length) && (
          <div className={styles.tags}>
            {formik.values.tags.map(color => (
              <Tag key={color} color={color} onDelete={deleteTag} editable />
            ))}
          </div>
        )}
        <MultiSelect formik={formik} values={formik.values.tags} />
        <Button disabled={!formik.isValid} variant='primary' type='submit'>
          Сохранить
        </Button>
      </form>
    </div>
  )
}
