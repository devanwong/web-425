/**
 * Title: app.module.ts
 * Author: Devan Wong
 * Date: 15 January 2021
 * Description: App Routing Module
 */

// Importing routes that is apart of the angular library
import { Routes } from '@angular/router';
//Imprting from home n g c home
import { HomeComponent } from './home/home.component';
//Imprting from home n g c sign-in
import { SignInComponent } from './sign-in/sign-in.component';

//This is creating an export for app routes
//Everything inside is to create a new path
 export const AppRoutes: Routes = [
   {
    //  The homepage will lead to the signin page
    path: '',
    component: SignInComponent
   },
   {
    path: 'home',
    component: HomeComponent
   }
 ]
