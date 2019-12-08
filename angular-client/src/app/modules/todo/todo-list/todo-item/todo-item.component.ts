import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Output() deleteItem: EventEmitter<void> = new EventEmitter();
  @Output() updateItem: EventEmitter<void> = new EventEmitter();

  @Input() item: TodoItem;

  constructor() { }

  ngOnInit() {
  }

  onUpdate() {
    this.updateItem.emit();
  }

  onDelete() {
    this.deleteItem.emit();
  }
}
