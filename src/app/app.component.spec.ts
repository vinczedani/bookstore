import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookListElementComponent } from './books/book-list-element/book-list-element.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BookListComponent,
        BookDetailComponent,
        HeaderComponent,
        SidebarComponent,
        BookListElementComponent,
        CartComponent,
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
      ],
      providers: [
        CartService,
        { provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();
  }));
  it('should be able to create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
