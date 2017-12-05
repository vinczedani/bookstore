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
  private books: Book[];
  private queryString: string;

  requestedPage: number;
  currentPage: number;
  maxPage: number;

  booksLoaded = new Subject<Book[]>();
  maxPagesChanged = new Subject<number>();

  constructor(
    private http: HttpClient,
  ) { }

  searchBooks(queryString: string) {
    this.queryString = queryString;
    this.requestedPage = 1;

    this.sendRequest();
  }

  getNextPage() {
    if (this.requestedPage === this.maxPage) {
      return;
    }
    this.requestedPage += 1;

    this.sendRequest();
  }

  getPrevPage() {
    if (this.requestedPage === 1) {
      return;
    }
    this.requestedPage -= 1;

    this.sendRequest();
  }

  getPage(page: number) {
    this.requestedPage = page;

    this.sendRequest();
  }

  private sendRequest() {
    const skip = 10 * (this.requestedPage - 1);

    const params = new HttpParams()
    .set('q', this.queryString)
    .set('startIndex', '' + skip)
    .set('printType', 'books');

    this.http.get('https://www.googleapis.com/books/v1/volumes', { params: params })
    .subscribe((res: IGetVolumesResponse) => {
      this.currentPage = this.requestedPage;
      this.books = res.items;
      this.maxPage = Math.ceil(res.totalItems / 10);
      this.booksLoaded.next(this.books.slice());
      this.maxPagesChanged.next(this.maxPage);
    });
  }
}
