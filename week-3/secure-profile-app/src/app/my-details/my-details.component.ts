/**
 * Title: my-details.component.ts
 * Author: Devan Wong
 * Date: 8 January 2020
 * Description: my details component
 */

import { Component, OnInit } from '@angular/core';
// Creating a new class
export default class Person {
  // These are local variables.
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];
  //Added local varables to the constructor so anyone that instantiates the class need to provide all variables
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  // added toString to output the contents of our class specifically.
  toString() {
    console.log(`\n Full name: ${this.fullName} \n Favorite Food: ${this.favoriteFood} \n Favorite Color ${this.favoriteColor}`)
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  // creating a new variable called myProfile and give it a data type.
  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Devan Wong", "Pad Thai", "Purple")
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
