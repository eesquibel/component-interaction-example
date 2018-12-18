import { Component, OnInit, Input } from '@angular/core';
import { GenreModel } from '../../model/genre-model';
import { BookModel } from '../../model/book-model';

@Component({
  selector: 'example-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.less']
})
export class BookPreviewComponent implements OnInit {

  @Input()
  public Genre: GenreModel;

  @Input()
  public Book: BookModel;

  constructor() { }

  ngOnInit() {
  }

}
