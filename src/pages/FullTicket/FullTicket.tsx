import React from 'react'
import styles from './FullTicket.module.scss'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getTicketById } from '../../store/tickets/ticketsSelectors'
import { Input } from '../../components/Input/Input'
import { Tag } from '../../components/Tag/Tag'
import { Comment } from '../../components/Comment/Comment'
import BackToTask from '../../assets/back_to_task.svg'

export const FullTicket = () => {
  const { id } = useParams()
  const ticket = useSelector(getTicketById(id || ''))
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.link} to='/'>
          <img src={BackToTask} alt='Back to tasks' />
          Вернуться к задачам
        </Link>
      </nav>
      <div>
        <h4 className={styles.title}>{ticket.title}</h4>
        <div className={styles.ticket}>
          <Input value={ticket.title} />
          <Input value={ticket.description} multiline />
          <div className={styles.colors}>
            {ticket.tags.map(color => (
              <Tag color={color} key={color} />
            ))}
          </div>

          <div className={styles.comments}>
            {ticket.commentsIds.map(id => (
              <Comment id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
