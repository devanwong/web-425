/*
============================================
; Title: Exercise 1.5
; Author: Devan Wong
; Date: 18 December 2020
; Description: App component
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// This is where the variable is defined. Variable can be found in the in the app.component.html page
export class AppComponent {
  assignment = 'Assignment 1.5 - Components';
}
