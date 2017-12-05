import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SidebarComponent,
    CartComponent,
    CartItemComponent,
  ],
  exports: [
    SidebarComponent,
  ],
})
export class SidebarModule { }
