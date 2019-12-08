import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { TodoListComponent } from './modules/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './modules/todo/todo-list/todo-item/todo-item.component';
import { TodoService } from './modules/todo';
import { AppComponent } from './app.component';
import { TodoEffects } from './modules/todo/store/todo.effects';
import { TodoItemReducer } from './modules/todo/store/todo.reducer';
import { of } from 'rxjs';
import { AppRoutingModule } from './app.routing';

describe('AppComponent (integration)', () => {
  let appComponent: AppComponent;
  let appFixture: ComponentFixture<AppComponent>;

  let todoListComponent: TodoListComponent;
  let todoListFixture: ComponentFixture<TodoListComponent>;

  let el: DebugElement;
  let httpTestingController: HttpTestingController;

  const url = `${environment.url}/todos`;
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

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoListComponent,
        TodoItemComponent
      ],
      imports: [
        AppRoutingModule,
        HttpClientTestingModule,
        FormsModule,
        BrowserModule,
        RouterModule,
        StoreModule.forRoot({ todos: TodoItemReducer }),
        EffectsModule.forRoot([TodoEffects])
      ],
      providers: [TodoService]
    }).compileComponents();
  });

  beforeEach(() => {
    appFixture = TestBed.createComponent(AppComponent);
    appComponent = appFixture.componentInstance;

    todoListFixture = TestBed.createComponent(TodoListComponent);
    todoListComponent = todoListFixture.componentInstance;

    el = todoListFixture.debugElement;
    todoListComponent.items$ = of({ todos: items }) as any;
    todoListFixture.detectChanges();

    appFixture.detectChanges();

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should make a GET request on TODOS', () => {
    const request = httpTestingController.expectOne(url);
    request.flush(items);

    expect(request.request.method).toBe('GET');
    httpTestingController.verify();
  });

  it('should make a DELETE request on TODOS', () => {
    const details = el.query(By.directive(TodoItemComponent));
    const button = details.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    const requestDefault = httpTestingController.expectOne(url);
    requestDefault.flush(items);

    expect(requestDefault.request.method).toBe('GET');

    // Expect one delete from UserDetailsComponent
    const request = httpTestingController.expectOne(`${url}/${items[0]._id}`);
    request.flush({});

    expect(request.request.method).toBe('DELETE');
    httpTestingController.verify();
  });

  it('should show all TODOS', () => {
    const details = el.queryAll(By.directive(TodoItemComponent));
    expect(items.length).toBe(details.length);
  });

  it('should show all TODOS with correct information', () => {
    const todoItemComponents = el.queryAll(By.directive(TodoItemComponent));

    for (let i = 0; i < items.length; i++) {
      const itemEl = todoItemComponents[i].nativeElement;
      const name = itemEl.querySelector('.title').innerHTML;
      const checked = itemEl.querySelector('.checkbox').checked;

      expect(name).toBe(items[i].title);
      expect(checked).toBe(items[i].completed);
    }
  });
});
