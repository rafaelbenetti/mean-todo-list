import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../todo-list.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  constructor() { }

  ngOnInit() {
  }

  onDelete() {

  }
}
