import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

import { GenreModel } from './model/genre-model';
import { BookModel } from './model/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) {
  }

  public GetGenres(): Observable<GenreModel[]> {
    const observable = this.http.get(
      'assets/categories.json',
      {
        params : { },
        withCredentials: true
      }
    );

    const shared = observable.pipe(map((result: any) => {
      if (result.error) {
        return result;
      } else if (result instanceof Array) {
        const records = Array<GenreModel>();
        for (const record of result) {
          const genre = new GenreModel(record);
          records.push(genre);
        }
        return records;
      }
    }), share());

    shared.subscribe(result => {
      try {
        console.log(result);
      } catch {
        // IE is a big baby
      }
    });

    return shared;
  }

  public GetBooks(genre: GenreModel): Observable<BookModel[]> {
    const observable = this.http.get(
      'assets/books/' + genre.Name + '.json',
      {
        params : { },
        withCredentials: true
      }
    );

    const shared = observable.pipe(map((result: any) => {
      if (result.error) {
        return result;
      } else if (result instanceof Array) {
        const records = Array<BookModel>();
        for (const record of result) {
          const book = new BookModel(record);
          records.push(book);
        }
        return records;
      }
    }), share());

    shared.subscribe(result => {
      try {
        console.log(result);
      } catch {
        // IE is a big baby
      }
    });

    return shared;
  }
}
