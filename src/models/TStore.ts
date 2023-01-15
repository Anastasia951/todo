export const colors = [
  'violet',
  'green',
  'red',
  'lightBlue',
  'orange',
  'lightGreen',
  'darkBlue',
  'yellow',
] as const

export type TColor = typeof colors[number]
export type TTicketType = 'todo' | 'inProgress' | 'done'

export interface ITicket {
  title: string
  description?: string
  tags: TColor[]
  commentsIds?: string[]
  type: TTicketType
}

export type INewTicket = Omit<ITicket, 'commentsIds'>
