import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../todo-list.model';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Output() deleteItem: EventEmitter<void> = new EventEmitter();
  @Input() item: TodoItem;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  onUpdate() {
    this.todoListService.update(this.item)
      .subscribe();
  }

  onDelete() {
    this.todoListService.delete(this.item._id)
      .subscribe(() => {
        this.deleteItem.emit();
      });
  }
}
