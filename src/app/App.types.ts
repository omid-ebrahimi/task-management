export enum TaskState {
  ToDo = 'ToDo',
  InProgress = 'InProgress',
  Blocked = 'Blocked',
  InQA = 'InQA',
  Done = 'Done',
  Deployed = 'Deployed'
}

export interface TaskModel {
  id: string
  title: string
  description: string
  state: TaskState
}
