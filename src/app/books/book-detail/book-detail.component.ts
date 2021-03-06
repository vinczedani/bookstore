import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Book } from '../book.model';
import { CartService } from '../../sidebar/cart/cart.service';

export class BookDetailModalContext extends BSModalContext {
  public book: Book;
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit, ModalComponent<BookDetailModalContext> {
  book: Book;
  showFullDescription = true;
  shortDescription = '';

  constructor(
    public dialog: DialogRef<BookDetailModalContext>,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.book = this.dialog.context.book;
    const description = this.book.volumeInfo.description || '';
    if (description.length > 100) {
      this.shortDescription = description.split(' ').slice(0, 20).join(' ');
      this.showFullDescription = false;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.book);
    this.close();
  }

  close() {
    this.dialog.close();
  }
}
