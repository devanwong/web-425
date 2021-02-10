/**
 * Title: app-routing.module.ts
 * Author: Devan Wong
 * Date: 9 February 2021
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
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

// This is routing out to the components
const routes: Routes = [
  {
    //This allows anyone following the base layout will be able to use all its childs components as well.
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
      path: '',
      component: HomeComponent
    }
  ],
  // This will force a sign in page.
    canActivate: [SignInGuard]
  },
  {
    //This allows anyone following the base layout will be able to use all its childs components as well.
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
      path: 'not-found',
      component: NotFoundComponent
    },
    {
      path: 'sign-in',
      component: SignInComponent
    }
  ]
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
