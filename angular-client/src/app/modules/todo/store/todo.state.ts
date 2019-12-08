import { TodoItem } from '../todo.model';

export default class TodoItemState {
  items: Array<TodoItem>;
}

export const initializeState = () => {
  return { items: Array<TodoItem>() };
};
