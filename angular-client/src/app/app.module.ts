import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { TodoItemReducer } from './modules/todo/store/todo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({ todos: TodoItemReducer })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }



