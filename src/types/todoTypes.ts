export enum ActionTypes {
  WINDOW_OPEN_CLOSE = "window/open/close",
  ADD_NEW_TODO = "add/new/todo",
  DELETE_TODO = "delete/todo",
  SEARCH_TODO = "search/todo",
  COMPLETED_TODO = "completed/todo",
}
export interface IState {
  todos: any[];
  addNewTodo: boolean;
  searchTodo: string;
}
interface IwindowOpenClose {
  type: ActionTypes.WINDOW_OPEN_CLOSE;
}
interface IaddNewTodo {
  type: ActionTypes.ADD_NEW_TODO;
  payload: any;
}
interface IdeleteTodo {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}
interface IsearchTodo {
  type: ActionTypes.SEARCH_TODO;
  payload: string;
}
interface IcompletedTodo {
  type: ActionTypes.COMPLETED_TODO;
  payload: number;
}
export type todoActionType =
  | IwindowOpenClose
  | IaddNewTodo
  | IdeleteTodo
  | IsearchTodo
  | IcompletedTodo;
