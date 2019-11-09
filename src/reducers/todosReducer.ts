import { actionTypes, Todo, Action } from '../actions';


export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS:
      return action.payload;
    case actionTypes.REMOVE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);

    default:
      return state;
  }
}