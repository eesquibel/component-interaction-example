import { GenreComponent } from './books/genre/genre.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BookComponent } from './books/book/book.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':genre', component: GenreComponent },
  { path: ':genre/:book', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
