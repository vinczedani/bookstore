import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { BookService } from './books/book.service';
import { CartService } from './sidebar/cart/cart.service';
import { BooksModule } from './books/books.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    BooksModule,
    SidebarModule,
  ],
  providers: [
    BookService,
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
