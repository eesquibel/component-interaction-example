import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../../../model/book-model';

@Component({
  selector: 'example-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.less']
})
export class BookCoverComponent implements OnInit {

  @Input()
  public Book: BookModel;

  constructor() { }

  ngOnInit() {
  }

}
