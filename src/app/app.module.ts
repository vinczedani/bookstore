import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookService } from './books/book.service';
import { BookListElementComponent } from './books/book-list-element/book-list-element.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { PagerComponent } from './books/pager/pager.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    HeaderComponent,
    SidebarComponent,
    BookListElementComponent,
    CartComponent,
    CartItemComponent,
    PagerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
  ],
  providers: [
    BookService,
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
