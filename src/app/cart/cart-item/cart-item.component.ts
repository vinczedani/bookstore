import { Component, OnInit, Input } from '@angular/core';

import { CartElement } from '../cartElement.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartElement;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
  }

  removeItem() {
    this.cartService.removeFromCart(this.item.book.id);
  }
}
