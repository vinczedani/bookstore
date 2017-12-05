import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { BookListElementComponent } from './book-list-element.component';
import { CartService } from '../../cart/cart.service';
import { Book } from '../book.model';

describe('BookListElementComponent', () => {
  let component: BookListElementComponent;
  let fixture: ComponentFixture<BookListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListElementComponent ],
      providers: [CartService],
      imports: [ModalModule.forRoot(), BootstrapModalModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListElementComponent);
    component = fixture.componentInstance;
    component.book = new Book('123', {
      imageLinks: {
        smallThumbnail: 'http://via.placeholder.com/200x250',
        thumbnail: 'http://via.placeholder.com/200x250',
      },
      authors: ['John Doe'],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
