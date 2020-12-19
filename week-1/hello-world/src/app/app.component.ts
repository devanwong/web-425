/*
============================================
; Title: Exercise 1.3
; Author: Devan Wong
; Date: 18 December 2020
; Description: Angular CLI
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Devan's World!"
}
