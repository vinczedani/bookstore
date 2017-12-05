import { Component, OnInit, Input } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { overlayConfigFactory } from 'angular2-modal';

import { Book } from '../book.model';
import { CartService } from '../../cart/cart.service';
import { BookDetailComponent, BookDetailModalContext } from '../book-detail/book-detail.component';

@Component({
  selector: 'app-book-list-element',
  templateUrl: './book-list-element.component.html',
  styleUrls: ['./book-list-element.component.css'],
})
export class BookListElementComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private cartService: CartService,
    private modal: Modal,
  ) { }

  ngOnInit() {
  }

  showDetails() {
    this.modal.open(BookDetailComponent, overlayConfigFactory({ book: this.book }, BookDetailModalContext));
  }

  addToCart() {
    this.cartService.addToCart(this.book);
  }
}
