import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BookService } from '../book.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent implements OnInit, OnDestroy {
  static pageSize = 10;

  pageChangedSubscription: Subscription;
  pages: number[] = [];

  constructor(
    private bookService: BookService,
  ) { }

  get pageSize() {
    return PagerComponent.pageSize;
  }

  set pageSize(size: number) {
    PagerComponent.pageSize = size;
    this.bookService.setPageSize(size);
  }

  ngOnInit() {
    this.pageChangedSubscription = this.bookService.maxPagesChanged.subscribe((newMaxPageCount) => {
      const cp = this.bookService.currentPage;
      const pagesArray = [cp - 2, cp - 1, cp, cp + 1, cp + 2];
      this.pages = pagesArray.filter(pageNumber => {
        return pageNumber > 0 && pageNumber < newMaxPageCount;
      });
    });
  }

  ngOnDestroy() {
    if (this.pageChangedSubscription) {
      this.pageChangedSubscription.unsubscribe();
    }
  }

  getNextPage() {
    this.bookService.getNextPage();
  }

  getPrevPage() {
    this.bookService.getNextPage();
  }

  getPage(page: number) {
    this.bookService.getPage(page);
  }
}
