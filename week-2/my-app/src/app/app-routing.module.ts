/**
 * Title: app-routing.module.ts
 * Author: Devan Wong
 * Date: 8 January 2020
 * Description: Routing Module page
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importing the Components page to set up the routes.
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
//Adding routes to our Angular application so when we click on the links it will navigate to those components.
//The path is the appended to the end of the URL
//Components is where the HTML lives.
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
