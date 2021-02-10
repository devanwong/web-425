/**
 * Title: sign-in.service.ts
 * Author: Devan Wong
 * Date: 9 February 2021
 * Description: sign-in.service component
 */
// This was auto generated
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  // Creating a class member
  studentIds: Array<number>;
  constructor() {
    // Population the array with pre-populated values
    // These will be the validated numbers that will allow specific users to signin
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }
// Function  called validate to accept in a numerical value and return a boolean value based on the id that is passed matches the ID in the array we create
 validate(studentId: number){
  // return true is there is a match
  // this.studentIds.same == is a prebuilt method to allow to search over that array and return true or false
  return this.studentIds.some(id => id === studentId);
 }
}

