import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreModel } from 'src/app/model/genre-model';
import { BookServiceService } from 'src/app/book-service.service';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/model/book-model';

@Component({
  selector: 'example-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.less']
})
export class GenreComponent implements OnInit {

  public GenreList: Observable<GenreModel[]>;
  public Genre: GenreModel;
  public Books: Observable<BookModel[]>;

  constructor(
    private service: BookServiceService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const genre = param.get('genre');

      this.GenreList = this.service.GetGenres();
      this.GenreList.subscribe(list => {
        this.Genre = list.find(item => item.Name === genre);

        if (this.Genre) {
          this.Books = this.service.GetBooks(this.Genre);
        }
      });
    });
  }

}
