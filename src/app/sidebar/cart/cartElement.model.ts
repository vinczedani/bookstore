import { Book } from '../../books/book.model';

export class CartElement {
  book: Book;
  public count: number;

  constructor(book: Book, count: number) {
    this.book = book;
    this.count = count;
  }
}
