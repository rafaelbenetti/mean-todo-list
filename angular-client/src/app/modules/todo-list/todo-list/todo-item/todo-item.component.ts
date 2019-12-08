import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../todo-list.model';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
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
      .subscribe();
  }
}
