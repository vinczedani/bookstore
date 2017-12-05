import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule, DialogRef } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { BookDetailComponent } from './book-detail.component';
import { CartService } from '../../sidebar/cart/cart.service';
import { Book } from '../book.model';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookDetailComponent,
      ],
      imports: [
        ModalModule.forRoot(),
        BootstrapModalModule,
      ],
      providers: [
        CartService,
        { provide: DialogRef, useValue: {
          context: { book: new Book('1', {}) },
        } },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
