import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing';
import { CartService } from './sidebar/cart/cart.service';
import { SidebarModule } from './sidebar/sidebar.module';
import { BooksModule } from './books/books.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
        SidebarModule,
        BooksModule,
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
