/*
============================================
; Title: Exercise 1.5
; Author: Devan Wong
; Date: 18 December 2020
; Description: App component
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing from the app-routing.module page.
import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

//The declarations where auto generated with we used the CLI to create the components.
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
