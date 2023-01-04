import ReactDOM from 'react-dom'
import defaultStyles from '../Modal.module.scss'
import modalStyles from './CreateTicket.module.scss'
import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'
import { MultiSelect } from '../../MultiSelect/MultiSelect'
const styles = Object.assign(modalStyles, defaultStyles)
export const CreateTicket = () => {
  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Создать тикет</h4>
      <form className={styles.form}>
        <Input fullWidth placeholder='Название' />
        <Input fullWidth placeholder='Описание' multiline />
        <MultiSelect />
        <Button variant='primary'>Сохранить</Button>
      </form>
    </div>
  )
}
