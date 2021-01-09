/**
 * Title: app.module.ts
 * Author: Devan Wong
 * Date: 5 Jan 2021
 * Description: Routing file
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing from the app-routing.module page.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//The declarations where auto generated with we used the CLI to create the components.
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
