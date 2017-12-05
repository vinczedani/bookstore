import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});