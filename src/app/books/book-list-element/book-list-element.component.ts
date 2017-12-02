import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list-element',
  templateUrl: './book-list-element.component.html',
  styleUrls: ['./book-list-element.component.css'],
})
export class BookListElementComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
