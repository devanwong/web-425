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
// This is so we can add dialog module.
import { MatDialog } from '@angular/material/dialog';
// This is to insert the new component from book-details-dialog
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
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
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // We are calling the get books function and map it to this.books [books: Observable<IBook[]>;]
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
  // Returns the book that we are looking for based on the isbn number that we are passing in
  showBookDetails(isbn: string){
    this.book = this.booksService.getBook(isbn);
    // Creating a new object
    // A dialog is opened by calling the open method with a component to be loaded and an optional config object. The open method will return an instance of MatDialogRef
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      // set to true so you can only close the dialog box when pressed OK on the button
      disableClose: true,
      // This is how wide we made the dialog box.
      width: '800px'
    })
    console.log(this.book);
    // Used to close the dialog and receive notifications when the dialog has been closed. Any notification Observables will complete when the dialog closes.
    dialogRef.afterClosed().subscribe(result => {if (result === 'confirm') {this.book = null; }});
  }
}
