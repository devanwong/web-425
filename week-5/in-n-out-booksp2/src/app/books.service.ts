/**
 * Title: book.service.ts
 * Author: Devan Wong
 * Date: 28 January 2021
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

@Injectable({
  providedIn: 'root'
})

export class BooksService {
// Creating a class field.
  books: Array<IBook>;
  // Instantiating an array of books in the constructor to populate the book list
  constructor() {
    // There variables should match from the book.interface.ts
    this.books = [
      {
        isbn: '0063078902',
        title: 'Bridgerton: The Duke & I',
        description: 'In the ballrooms and drawing rooms of Regency London, rules abound. From their earliest days, children of aristocrats learn how to address an earl and curtsey before a prince—while other dictates of the ton are unspoken yet universally understood. A proper duke should be imperious and aloof. A young, marriageable lady should be amiable…but not too amiable.',
        numOfPages: 464,
        author: ['Julia Quinn']
      },
      {
        isbn: '0062353640',
        title: 'Viscount Who Loved Me',
        description: '1814 promises to be another eventful season, but not, This Author believes, for Anthony Bridgerton, Londons most elusive bachelor, who has shown no indication that he plans to marry. And, in all truth, why should he? When it comes to playing the consummate rake, nobody does it better . . . —Lady Whistledowns Society Papers, April 1814',
        numOfPages: 400,
        author: ['Julia Quinn']
      },
      {
        isbn: '0062353659',
        title: 'Offer From a Gentleman',
        description: 'Sophie Beckett never dreamed shed be able to sneak into Lady Bridgertons famed masquerade ball—or that "Prince Charming" would be waiting there for her! Though the daughter of an earl, Sophie has been relegated to the role of servant by her disdainful stepmother. But now, spinning in the strong arms of the debonair and devastatingly handsome Benedict Bridgerton, she feels like royalty. Alas, she knows all enchantments must end when the clock strikes midnight.',
        numOfPages: 416,
        author: ['Julia Quinn']
      },
      {
        isbn: '978-0062353689',
        title: 'Romancing Mister Bridgerton',
        description: 'Everyone knows that Colin Bridgerton is the most charming man in London. Penelope Featherington has secretly adored her best friends brother for . . . well, it feels like forever. After half a lifetime of watching Colin Bridgerton from afar, she thinks she knows everything about him, until she stumbles across his deepest secret . . . and fears she doesnt know him at all.',
        numOfPages: 432,
        author: ['Julia Quinn']
      },
      {
        isbn: '0062644394',
        title: 'To Sir Phillip, With Love',
        description: 'She wrote him a letter...and he stole her heart. Sir Phillip knew that Eloise Bridgerton was a spinster, and so hed proposed, figuring that shed be homely and unassuming, and more than a little desperate for an offer of marriage. Except. she wasnt. The beautiful woman on his doorstep was anything but quiet, and when she stopped talking long enough to close her mouth, all he wanted to do was kiss her and more.',
        numOfPages: 512,
        author: ['Julia Quinn']
      }
    ]
  }
  // This will return the entire array of books
  // This will return an observable
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }
  // This will return an individual books based on the ISBN number
  // This is iterate over this.books
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if(book.isbn === isbn) {
        return book;
      }
    }
  }
}
