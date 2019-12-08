import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import(`./modules/todo/todo.module`).then(m => m.TodoModule)
  },
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
