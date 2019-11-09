import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { Todo } from '../actions';

export interface storeState {
  todos: Todo[];
}
export const reducers = combineReducers<storeState>(
  {
    todos: todosReducer,
  }
)