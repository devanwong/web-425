/**
 * Title: app.component.ts
 * Author: Devan Wong
 * Date: 8 January 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// This is where the variable is defined. Variable can be found in the in the app.component.html page
// isLogged's logic can be found in app.component.html
export class AppComponent {
  isLoggedIn: boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
