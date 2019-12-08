import { Component, OnInit } from '@angular/core';
import * as TodoActions from '../store/todo.actions';
import { TodoItem } from '../todo.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import TodoItemState from '../store/todo.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items$: Observable<TodoItem[]>;
  item: TodoItem = new TodoItem();

  constructor(private store: Store<TodoItemState>) {
    this.items$ = store.pipe(select('items'));
  }

  ngOnInit() {
    this.store.dispatch(TodoActions.BeginGetTodoItemAction());
  }

  onSave(item: TodoItem): void {
    this.store.dispatch(TodoActions.CreateTodoItemAction(item));
  }

  onDeleteItem(item: TodoItem) {
    // this.items = this.items.filter(i => i._id !== item._id);
  }
}
