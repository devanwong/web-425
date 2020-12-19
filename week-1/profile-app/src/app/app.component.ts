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
export class AppComponent {
  assignment = 'Assignment 1.5 - Components';
}
