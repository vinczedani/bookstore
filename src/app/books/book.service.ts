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
  private pageSize = 10;

  currentPage: number;
  maxPage: number;

  booksLoaded = new Subject<Book[]>();
  maxPagesChanged = new Subject<number>();

  constructor(
    private http: HttpClient,
  ) { }

  searchBooks(queryString: string) {
    this.queryString = queryString;
    this.currentPage = 1;

    this.sendRequest();
  }

  getNextPage() {
    if (this.currentPage === this.maxPage) {
      return;
    }
    this.currentPage += 1;

    this.sendRequest();
  }

  getPrevPage() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage -= 1;

    this.sendRequest();
  }

  getPage(page: number) {
    this.currentPage = page;

    this.sendRequest();
  }

  setPageSize(newSize: number) {
    if (newSize > 40 || newSize < 1) {
      return;
    }

    this.pageSize = newSize;
  }

  private sendRequest() {
    const skip = this.pageSize * (this.currentPage - 1);

    const params = new HttpParams()
    .set('q', this.queryString)
    .set('maxResults', '' + this.pageSize)
    .set('startIndex', '' + skip)
    .set('printType', 'books');

    this.http.get('https://www.googleapis.com/books/v1/volumes', { params: params })
    .subscribe((res: IGetVolumesResponse) => {
      console.log(res);
      this.books = res.items;
      this.maxPage = Math.ceil(res.totalItems / this.pageSize);
      this.booksLoaded.next(this.books.slice());
      this.maxPagesChanged.next(this.maxPage);
    });
  }
}
