import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Book } from '../books/book.model';
import { CartElement } from './cartElement.model';

const LOCALSTORAGE_CART_KEY = 'Bookstore-Localstorage-ShoppingCart';

@Injectable()
export class CartService {
  booksInCart: CartElement[] = [];
  cartChange = new Subject<CartElement[]>();

  constructor() {
    this.loadCartFromLocalStorage();
  }

  getCart() {
    return this.booksInCart.slice();
  }

  addToCart(book: Book) {
    const bookInCart = this.findById(book.id);

    if (bookInCart) {
      bookInCart.count += 1;
    } else {
      const newCartElement = new CartElement(book, 1);
      this.booksInCart.push(newCartElement);
    }

    this.disPathEvent();
  }

  removeFromCart(id: string) {
    this.booksInCart = this.booksInCart.filter(cartItem => cartItem.book.id !== id);
    this.disPathEvent();
  }

  emptyCart() {
    this.booksInCart = [];
    this.disPathEvent();
  }

  private disPathEvent() {
    localStorage.setItem(LOCALSTORAGE_CART_KEY, JSON.stringify(this.booksInCart));
    this.cartChange.next(this.booksInCart.slice());
  }

  private findById(id: string): CartElement | null {
    let foundCartItem = null;
    this.booksInCart.forEach(cartItem => {
      if (cartItem.book.id === id) {
        foundCartItem = cartItem;
      }
    });

    return foundCartItem;
  }

  private loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem(LOCALSTORAGE_CART_KEY) || '[]';

    this.booksInCart = JSON.parse(storedCart);
    this.disPathEvent();
  }
}
