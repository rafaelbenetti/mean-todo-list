import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Output() deleteItem: EventEmitter<void> = new EventEmitter();
  @Input() item: TodoItem;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onUpdate() {
    this.todoService.update(this.item)
      .subscribe();
  }

  onDelete() {
    this.todoService.delete(this.item._id)
      .subscribe(() => {
        this.deleteItem.emit();
      });
  }
}
