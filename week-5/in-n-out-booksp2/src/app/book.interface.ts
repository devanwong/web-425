/**
 * Title: book.interface.ts
 * Author: Devan Wong
 * Date: 28 January 2021
 * Description: Book interface object
 */

//  This was manually inputted by Devan Wong
// This are custom variables.
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  author: Array<string>;
}
