/*
============================================
; Title: Exercise 3.3 - secure-profile-app
; Author: Devan Wong
; Date: 15 January 2021
; Description: This is the home.component.ts page
;===========================================
*/

import { Component, OnInit } from '@angular/core';
// This import is for Activated Route from the Angular library.
import { ActivatedRoute } from '@angular/router';
// This was autogenerated but its declaring what the component will have.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// isLogged's logic can be found in home.component.html
export class HomeComponent implements OnInit {
  isLoggedIn: Boolean;
  // Constructor will look at the value pass over from the query params
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
   }

  ngOnInit(): void {
  }

}
