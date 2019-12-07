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

  constructor(
    private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoListService.get()
      .subscribe(items => this.items = items);
  }
}
