import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { TodoItemReducer } from './modules/todo/store/todo.reducer';
import { TodoEffects } from './modules/todo/store/todo.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({ todos: TodoItemReducer }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }



