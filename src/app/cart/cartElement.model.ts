import { Book } from '../books/book.model';

export class CartElement {
  book: Book;
  count: number;

  constructor(book: Book, count: number) {
    this.book = book;
    this.count = count;
  }

  addCopy() {
    this.count += 1;
  }

  removeCopy() {
    this.count -= 1;
  }
}
