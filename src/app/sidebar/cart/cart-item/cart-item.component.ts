import { Component, OnInit, Input } from '@angular/core';
import { Modal, overlayConfigFactory } from 'angular2-modal';

import { CartElement } from '../cartElement.model';
import { CartService } from '../cart.service';
import { BookDetailComponent, BookDetailModalContext } from '../../../books/book-detail/book-detail.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartElement;

  constructor(
    private cartService: CartService,
    private modal: Modal,
  ) { }

  ngOnInit() {
  }

  removeItem() {
    this.cartService.removeFromCart(this.item.book.id);
  }

  showDetails() {
    this.modal.open(BookDetailComponent, overlayConfigFactory({ book: this.item.book }, BookDetailModalContext));
  }
}
