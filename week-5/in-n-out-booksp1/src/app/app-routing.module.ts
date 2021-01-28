/**
 * Title: app-routing.module.ts
 * Author: Devan Wong
 * Date: 27 January 2021
 * Description: Routing file
 */
// These were auto generated
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// These were added to import the routes to the components.
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// These are the routes to the different components
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
