import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreModel } from '../model/genre-model';
import { BookServiceService } from '../book-service.service';
import { serializePath } from '@angular/router/src/url_tree';

@Component({
  selector: 'example-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  public GenreList: Observable<GenreModel[]>;

  constructor(private service: BookServiceService) { }

  ngOnInit() {
    this.GenreList = this.service.GetGenres();
  }

}
