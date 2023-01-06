import defaultStyles from '../Modal.module.scss'
import modalStyles from './EditTicket.module.scss'
import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'
import { MultiSelect } from '../../MultiSelect/MultiSelect'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTicketById } from '../../../store/tickets/ticketsSelectors'
const styles = Object.assign(modalStyles, defaultStyles)

export const EditTicket = () => {
  let { id } = useParams()
  const ticket = useSelector(getTicketById(id || ''))
  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Редактировать тикет</h4>
      <form className={styles.form}>
        <Input fullWidth value={ticket.title} />
        <Input fullWidth value={ticket.description} multiline />
        <MultiSelect />
        <Button variant='primary'>Сохранить</Button>
      </form>
    </div>
  )
}
