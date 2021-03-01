/**
 * Title: book-list.component.ts
 * Author: Devan Wong
 * Date: 17 February 2021
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
  books: Array<IBook> = [];
  // When the users select, it creates a map to that a book object
  book: IBook;
  // This is dependency injection.
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // This is subscribing the getBooks function
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      // This will loops over the response data object
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author){
              return author.name;
            })
          }
          // This statement push a new object to a books array, isbn will display the isbn numbers with 10-13, when description is empty it will display n/a
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            author: authors
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }
  // Returns the book that we are looking for based on the isbn number that we are passing in
  showBookDetails(isbn: string){
    //This function is to search the books array and return the matching book object
    this.book = this.books.find(book => book.isbn === isbn);
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
