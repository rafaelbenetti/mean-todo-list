import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

import { TodoListComponent } from './todo-list.component';
import { StoreModule } from '@ngrx/store';
import { TodoItemReducer } from '../store/todo.reducer';
import { of } from 'rxjs';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let el: DebugElement;

  const items = [{
      _id: '5ded36c8b56aa9001f650701',
      title: 'I have to clean the house',
      completed: true
    },
    {
      _id: 'a9001f6507015ded36c8b56a',
      title: 'I have to clean the garden',
      completed: false
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoItemComponent
      ],
      imports: [
        FormsModule,
        StoreModule.forRoot({ todos: TodoItemReducer }),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.items$ = of({ todos: items }) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all items', () => {
    const items = el.queryAll(By.directive(TodoItemComponent));
    expect(items.length).toBe(items.length);
  });
});
