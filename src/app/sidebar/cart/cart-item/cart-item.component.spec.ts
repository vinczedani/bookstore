import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { CartItemComponent } from './cart-item.component';
import { CartService } from '../cart.service';
import { CartElement } from '../cartElement.model';
import { Book } from '../../../books/book.model';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemComponent ],
      providers: [CartService],
      imports: [
        ModalModule.forRoot(),
        BootstrapModalModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    const book = new Book('123', {
      title: 'Test Book',
    });
    component.item = new CartElement(book, 1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
