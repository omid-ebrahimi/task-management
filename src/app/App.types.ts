export type TaskState =
  | 'ToDo'
  | 'InProgress'
  | 'Blocked'
  | 'InQA'
  | 'Done'
  | 'Deployed'

export interface TaskModel {
  id: string
  title: string
  description: string
  state: TaskState
}
