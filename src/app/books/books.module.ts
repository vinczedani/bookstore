import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListElementComponent } from './book-list-element/book-list-element.component';
import { PagerComponent } from './pager/pager.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    BookListComponent,
    BookListElementComponent,
    BookDetailComponent,
    PagerComponent,
  ],
  exports: [
    BookListComponent,
    BookDetailComponent,
  ],
})
export class BooksModule { }
