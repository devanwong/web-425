/**
 * Title: app-routing.module.ts
 * Author: Devan Wong
 * Date: 8 January 2020
 * Description: Routing Module page
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importing the Components
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
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

//This was auto generated with downloading angular routes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
