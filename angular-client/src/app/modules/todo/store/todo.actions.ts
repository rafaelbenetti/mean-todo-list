import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../todo.model';

export const GetTodoItemAction = createAction('[TodoItem] - Get TodoItem');

export const BeginGetTodoItemAction = createAction('[TodoItem] - Begin Get TodoItem');

export const SuccessGetTodoItemAction = createAction(
  '[TodoItem] - Success Get TodoItem',
  props<{ payload: TodoItem[] }>()
);


export const CreateTodoItemAction = createAction(
  '[TodoItem] - Create TodoItem',
  props<TodoItem>()
);

export const BeginCreateTodoItemAction = createAction(
  '[TodoItem] - Begin Create TodoItem',
  props<{ payload: TodoItem }>()
);

export const SuccessCreateTodoItemAction = createAction(
  '[TodoItem] - Success Create TodoItem',
  props<{ payload: TodoItem }>()
);


export const ErrorTodoItemAction = createAction('[TodoItem] - Error', props<Error>());
