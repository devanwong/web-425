/**
 * Title: app.module.ts
 * Author: Devan Wong
 * Date: 8 January 2021
 * Description: App Module
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing from the app-routing.module page.
import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
//Importing app routes array so we can wire in the paths to the module
import { AppRoutes } from './app.routing';
//Importing the routing module to allow our nav. to our application.
import { RouterModule } from '@angular/router';

//The declarations where auto generated with we used the CLI to create the components.
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    HomeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    // for Root is grabbing the paths from the app.routing.ts file
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
