import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';


@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [
    FormsModule,
    CommonModule,
    TodoListRoutingModule
  ]
})
export class TodoListModule { }
