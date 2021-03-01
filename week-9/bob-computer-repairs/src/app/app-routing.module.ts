/**
 * Title: app-routing.module.ts
 * Author: Devan Wong
 * Date: 26 February 2021
 * Description: Routing file
 */
// These were auto generated
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// These were added to import the routes to the components.
import { RepairListComponent } from './repair-list/repair-list.component';;
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

// These are the routes to the different components
const routes: Routes = [
  {
    path:'',
    component: RepairListComponent
  },
  {
    path: 'repair-list',
    component: RepairListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    // This is the redirect page to the session parent component.
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
