import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  public searchTerm = '';

  books: Book[] = [];
  searchSubscription: Subscription;

  constructor(
    private bookService: BookService,
  ) { }

  searchBooks() {
    if (this.searchTerm.length > 0) {
      this.bookService.searchBooks(this.searchTerm);
    }
  }

  ngOnInit() {
    this.searchSubscription = this.bookService.booksLoaded.subscribe(
      (books: Book[]) => {
        this.books = books;
      },
    );
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
