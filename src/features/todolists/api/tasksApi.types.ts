import { type TaskPriority, TaskStatus } from "../lib/enums"

export type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: DomainTask[]
}
export type UpdateTaskModel = {
  title: string
  description: string | null
  priority: TaskPriority
  startDate: string | null
  deadline: string | null
  status: TaskStatus
}
export type DomainTask = {
  description: string | null
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string | null
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string | null
}