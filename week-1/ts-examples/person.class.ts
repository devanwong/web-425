/*
============================================
; Title: Exercise 1.4
; Author: Devan Wong
; Date: 18 December 2020
; Description: Typescript
;===========================================
*/

import { IPerson } from "./person.interface";

//created two fields 
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//test out 
// person object created
let myName = new Person("Devan", "Wong");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);