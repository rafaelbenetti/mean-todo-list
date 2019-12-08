import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-list.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items: TodoItem[];
  item: TodoItem = new TodoItem();

  constructor(
    private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoListService.get()
      .subscribe(items => this.items = items);
  }

  onSave(item: TodoItem): void {
    this.todoListService.create(item)
      .subscribe(() => {
        this.todoListService.get()
          .subscribe(items => this.items = items);
        this.item = new TodoItem();
      })
  }

  onDeleteItem(item: TodoItem) {
    this.items = this.items.filter(i => i._id !== item._id);
  }
}
