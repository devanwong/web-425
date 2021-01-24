/**
 * Title: composer-list.component.ts
 * Author: Devan Wong
 * Date: 25 January 2021
 * Description: Composer List page, this will display a list of composers
 */

import { Component, OnInit } from '@angular/core';
// adding to import the Icomposer Interface
import { IComposer } from '../composer.interface';
// adding to import the Composer service
import { ComposerService } from '../composer.service';
// adding this component is part of Angulars built-in FormsModule. 
import { FormControl } from '@angular/forms';
// adding this component will bring in the debounce from rxjs.
import { debounceTime } from 'rxjs/operators';

// This was autogenerated but its declaring what the component will have.
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {
// This is creating a composer property called composers and its going to have an array of IComposer. This is a local component variable
composers: Array<IComposer>;
//This will create a new form control
txtSearchControl = new FormControl('');
  constructor(private composerService: ComposerService) {
    //This is dependency injection that is a built in feature of angular
    this.composers = this.composerService.getComposers();
    //txtSearchControl is coming from the composer-list.html and is called when the value is changed on the form control. one the value is found after 500 miliseconds we will run the filterComposer function which will give an alrt of the value inputted
    // debounceTime function is used to “slow down” the number of times the filterComposer function is called
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
   }
  ngOnInit(): void {
  }
  // is a method that creates an alert
  filterComposers(name: string){
    alert(name)
  }
}
