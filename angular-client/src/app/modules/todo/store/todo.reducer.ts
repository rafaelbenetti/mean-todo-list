
import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import TodoItemState, { initializeState } from './todo.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(TodoActions.SuccessGetTodoItemAction, (state: TodoItemState, { payload }) => {
    return { ...state, todos: payload };
  }),
  on(TodoActions.SuccessCreateTodoItemAction, (state: TodoItemState, { payload }) => {
    return { ...state, todos: [...state.todos, payload], TodoItemError: null };
  }),
  on(TodoActions.SuccessUpdateTodoItemAction, (state: TodoItemState, { payload }) => {
    return { ...state, todos: [...state.todos.filter(t => t._id !== payload._id), payload], TodoItemError: null };
  }),
  on(TodoActions.SuccessDeleteTodoItemAction, (state: TodoItemState, { payload }) => {
    return { ...state, todos: state.todos.filter(t => t._id !== payload), TodoItemError: null };
  }),
  on(TodoActions.ErrorTodoItemAction, (state: TodoItemState, error: Error) => {
    console.log(error);
    return { ...state, TodoItemError: error };
  })
);

export function TodoItemReducer(state: TodoItemState | undefined, action: Action) {
  return reducer(state, action);
}
