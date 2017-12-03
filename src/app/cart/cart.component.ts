import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartService } from './cart.service';
import { CartElement } from './cartElement.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  inCartBooks: CartElement[];
  cartChangeSubscription: Subscription;

  constructor(
    private cartService: CartService,
  ) { }

  emptyCart() {
    this.cartService.emptyCart();
  }

  ngOnInit() {
    this.inCartBooks = this.cartService.getCart();
    this.cartChangeSubscription = this.cartService.cartChange.subscribe(
      (books: CartElement[]) => {
        this.inCartBooks = books;
      },
    );
  }

  ngOnDestroy() {
    this.cartChangeSubscription.unsubscribe();
  }
}
