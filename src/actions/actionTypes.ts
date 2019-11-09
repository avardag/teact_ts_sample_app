import { RemoveTodoAction, FetchTodosAction } from './todoActions';

export enum actionTypes {
  FETCH_TODOS,
  REMOVE_TODO
}

//type union to be passed to reducer
export type Action = FetchTodosAction | RemoveTodoAction