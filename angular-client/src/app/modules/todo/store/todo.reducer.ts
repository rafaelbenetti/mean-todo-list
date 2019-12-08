
import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import TodoItemState, { initializeState } from './todo.state';
import { TodoItem } from '../todo.model';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(TodoActions.GetTodoItemAction, state => state),
  on(TodoActions.CreateTodoItemAction, (state: TodoItemState, todoItem: TodoItem) => {
    return { ...state, todos: [...state.todos, todoItem], TodoItemError: null };
  }),
  on(TodoActions.SuccessGetTodoItemAction, (state: TodoItemState, { payload }) => {
    return { ...state, todos: payload };
  }),
  on(TodoActions.SuccessCreateTodoItemAction, (state: TodoItemState, { payload }) => {
    return { ...state, todos: [...state.todos, payload], TodoItemError: null };
  }),
  on(TodoActions.ErrorTodoItemAction, (state: TodoItemState, error: Error) => {
    console.log(error);
    return { ...state, TodoItemError: error };
  })
);

export function TodoItemReducer(state: TodoItemState | undefined, action: Action) {
  return reducer(state, action);
}
