import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookPreviewComponent } from './books/book-preview/book-preview.component';
import { BookComponent } from './books/book/book.component';
import { GenreComponent } from './books/genre/genre.component';
import { ListComponent } from './list/list.component';
import { BookCoverComponent } from './books/book/book-cover/book-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    ListComponent,
    BookComponent,
    BookPreviewComponent,
    BookCoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
