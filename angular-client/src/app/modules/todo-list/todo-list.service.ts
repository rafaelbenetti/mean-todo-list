import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TodoItem } from './todo-list.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  url = `${environment.url}/todos`;

  constructor(private http: HttpClient) { }

  get(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.url);
  }

  create(item: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.url, item);
  }

  update(item: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(this.url, item);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
