import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as TodoActions from './todo.actions';
import { TodoItem } from '../todo.model';
import { TodoService } from '../todo.service';

@Injectable()
export class TodoEffects {
  constructor(
    private todoService: TodoService,
    private action$: Actions) { }

  GetTodos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(TodoActions.BeginGetTodoItemAction),
      mergeMap(action =>
        this.todoService.get().pipe(
          map((data: TodoItem[]) => {
            return TodoActions.SuccessGetTodoItemAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(TodoActions.ErrorTodoItemAction(error));
          })
        )
      )
    )
  );

  CreateTodo$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(TodoActions.BeginCreateTodoItemAction),
      mergeMap((action: any) =>
        this.todoService
          .create(action.payload)
          .pipe(
            map((data: TodoItem) => {
              return TodoActions.SuccessCreateTodoItemAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(TodoActions.ErrorTodoItemAction(error));
            })
          )
      )
    )
  );

  UpdateTodo$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(TodoActions.BeginUpdateTodoItemAction),
      mergeMap((action: any) =>
        this.todoService
          .update(action.payload)
          .pipe(
            map((data: TodoItem) => {
              return TodoActions.SuccessUpdateTodoItemAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(TodoActions.ErrorTodoItemAction(error));
            })
          )
      )
    )
  );

  DeleteTodo$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(TodoActions.BeginDeleteTodoItemAction),
      mergeMap(action =>
        this.todoService
          .delete(action.payload)
          .pipe(
            map((data: TodoItem) => {
              return TodoActions.SuccessDeleteTodoItemAction({ payload: action.payload });
            }),
            catchError((error: Error) => {
              return of(TodoActions.ErrorTodoItemAction(error));
            })
          )
      )
    )
  );
}
