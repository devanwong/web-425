/**
 * Title: book.service.ts
 * Author: Devan Wong
 * Date: 17 February 2021
 * Description: Book Service
 */

// These were auto generated
import { Injectable } from '@angular/core';
// Import the Observable class from rxjs
import { Observable } from 'rxjs';
// Import the of operator from rxjs
import { of } from 'rxjs';
// Import the map operator from rxjs
import { map } from 'rxjs/operators';
// Import the IBook interface
import { IBook } from './book.interface';
// Importing the HttpClient and HTTP params
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  // New variable name isbn with string of array
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];
  // Adding imported http
  constructor(private http: HttpClient) {
  }
  // This will return the entire array of books
  // This will return an observable
  getBooks() {
    // imported from httpparams.
    let params = new HttpParams();

    // This will append the isbn number
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    // This is append the format, json
    params = params.append('format', 'json');
    // This is append jscmd, details
    params = params.append('jscmd', 'details');
    // return the http.get function passing in the openlibrary url and the params object 
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}
