import axios from 'axios';
import { Dispatch } from 'redux';
import { actionTypes } from './actionTypes';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: actionTypes.FETCH_TODOS;
  payload: Todo[];
}
export interface RemoveTodoAction {
  type: actionTypes.REMOVE_TODO;
  payload: number;
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(apiUrl)

    dispatch<FetchTodosAction>({
      type: actionTypes.FETCH_TODOS,
      payload: response.data
    })
  }
}

export const removeTodo = (id: number): RemoveTodoAction => {
  return {
    type: actionTypes.REMOVE_TODO,
    payload: id
  }
}