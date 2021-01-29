/**
 * Title: book-list.component.ts
 * Author: Devan Wong
 * Date: 27 January 2021
 * Description: Book-list file
 */
// This was auto generated.
import { Component, OnInit } from '@angular/core';
// This is so we can used the IBOOK
import { IBook } from '../book.interface';
// This is so we can use the Observable
import { Observable } from 'rxjs';
// This is so we can used the books service.
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  // Adding more field properties
  books: Observable<IBook[]>;
  // This is to make a header for the table.
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'author'];
  // When the users select, it creates a map to that a book object
  book: IBook;
  // This is dependency injection.
  constructor(private booksService: BooksService) {
    // We are calling the get books function and map it to this.books [books: Observable<IBook[]>;]
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
  // Returns the book that we are looking for based on the isbn number that we are passing in
  showBookDetails(isbn: string){
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
