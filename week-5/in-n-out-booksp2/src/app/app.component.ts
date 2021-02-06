/**
 * Title: app.component.ts
 * Author: Devan Wong
 * Date: 27 January 2021
 * Description: App component
 */

// This was autogenerated
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Creating a variable and setting it to a string
  assignment: string;

  constructor(){
    // Assigning the variable to the current Exercise. This will display in the app.component.html
    this.assignment = 'Exercise 5.3 - Data Tables';
  }
}