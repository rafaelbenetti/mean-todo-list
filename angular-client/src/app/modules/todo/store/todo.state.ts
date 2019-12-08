import { TodoItem } from '../todo.model';

export default class TodoItemState {
  todos: Array<TodoItem>;
}

export const initializeState = () => {
  return { todos: Array<TodoItem>() };
};
