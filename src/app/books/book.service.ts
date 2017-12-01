import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Book } from './book.model';

interface IGetVolumesResponse {
  items: Book[];
  totalItems: number;
}

@Injectable()
export class BookService {
  books: Book[];
  booksLoaded = new Subject<Book[]>();

  constructor(
    private http: HttpClient,
  ) { }

  searchBooks(queryString: string) {
    const params = new HttpParams()
      .set('q', queryString)
      .set('printType', 'books');

    this.http.get('https://www.googleapis.com/books/v1/volumes', { params: params })
    .subscribe((res: IGetVolumesResponse) => {
      this.books = res.items;
      this.booksLoaded.next(this.books.slice());
    });
  }
}
