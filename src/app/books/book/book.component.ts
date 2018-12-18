import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { BookServiceService } from 'src/app/book-service.service';
import { BookModel } from 'src/app/model/book-model';
import { GenreModel } from 'src/app/model/genre-model';

@Component({
  selector: 'example-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  public GenreList: Observable<GenreModel[]>;
  public Genre: GenreModel;
  public Books: Observable<BookModel[]>;
  public Book: BookModel;

  constructor(
    private service: BookServiceService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const genre = param.get('genre');
      const name = param.get('book');

      this.GenreList = this.service.GetGenres();
      this.GenreList.subscribe(list => {
        this.Genre = list.find(item => item.Name === genre);

        if (this.Genre) {
          this.Books = this.service.GetBooks(this.Genre);
          this.Books.subscribe(books => {
            this.Book = books.find(item => item.GetURL() === name);
          });
        }
      });
    });
  }

}
