/**
 * Title: app-routing.module.ts
 * Author: Devan Wong
 * Date: 5 February 2021
 * Description: Routing file
 */
// These were auto generated
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importing the components being used.
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// This is routing out to the components
const routes: Routes = [
  {
    //This allows anyone following the base layout will be able to use all its childs components as well.
    path: '',
    component: BaseLayoutComponent,
    children: [{
      path: '',
      component: HomeComponent
    }]
  },
  {
    //This allows anyone following the base layout will be able to use all its childs components as well.
    path: 'session',
    component: AuthLayoutComponent,
    children: [{
      path: 'not-found',
      component: NotFoundComponent
    }]
  },
  {
    // This is the redirect page to the session parent component.
    path: '**',
    redirectTo: 'session/not-found'
  }
];

// These were auto generated
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
