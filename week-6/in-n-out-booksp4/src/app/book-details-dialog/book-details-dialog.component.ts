/**
 * Title: book-details dialog.component.ts
 * Author: Devan Wong
 * Date: 27 January 2021
 * Description: book details dialog file
 */
// This was auto generated.
import { Component, OnInit } from '@angular/core';
// Imports Mat Dialog
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// Imports inject from angular core
import { Inject } from '@angular/core';
// Import from book.interface
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {
  // This was imported from book.interface.
  book: IBook;

  // This is dependency injections
  // To access the data in your dialog component, you have to use the MAT_DIALOG_DATA injection token:
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
