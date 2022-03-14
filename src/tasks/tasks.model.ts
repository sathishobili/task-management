export interface Tasks {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  Done = 'DONE',
}
