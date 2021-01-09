/**
 * Title: composer-list.component.ts
 * Author: Devan Wong
 * Date: 8 January 2020
 * Description: Composer List page
 */

import { Component, OnInit } from '@angular/core';
// Creating a new class named Composer
export default class Composer {
  // These are the local variables
  fullName: string;
  genre: string;
   //Added local variables to the constructor so anyone that instantiates the class need to provide all variables
  constructor(fullName:string, genre:string){
    this.fullName = fullName;
    this.genre = genre;
  }
   // added toString to output the contents of our class specifically.
   toString() {
    console.log(`\n Full name: ${this.fullName} \n Genre: ${this.genre}`)
  }
}
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
  // creating a new variable called myProfile and give it a data type.
  composers: Array<Composer>;
  constructor() {
    // These are five new Composer Objects
    this.composers = [
      new Composer("Frank Ocean", "R&B"),
      new Composer("Taylor Swift", "Pop"),
      new Composer("Adele", "Pop"),
      new Composer("Sam Cooke", "Soul"),
      new Composer("Billie Eiliosh", "Electropop")
    ]
   }

  ngOnInit(): void {
  }

}
