
/**
 * Title: repair-list.component.ts
 * Author: Devan Wong
 * Date: 28 Feb 2021
 * Description: repair-list component | home page.
 */
// This was auto generated
import { Component, OnInit, NgModule } from '@angular/core';
// insert observable so repairs can be used as an observable
import { Observable } from 'rxjs';
// importing for the variable repair
import { IRepair } from '../repair.interface';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InvoiceDetailsDialogComponent } from '../invoice-details-dialog/invoice-details-dialog.component';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})

export class RepairListComponent implements OnInit {
  // getting pulled in from  repairs.service

  // This variable builds the angular form.
  repairForm: FormGroup;
  // This will be the new array that we push into for the calculations
  repairs: Array<IRepair> = [];
  selectedRepairs = [];
  repair: IRepair;
  repairs_list = [];
  // This is for invoice calculations
  parts: 0;
  labor: 0;


  constructor(private dialog: MatDialog, private fb: FormBuilder ) {
    // This allows is pre-filled data to display the services.
    this.repairs_list = [
      {
        item: 'Password Reset',
        price: '39.99',
        description: 'This is to help reset your password',
        checked: false
      },
      {
        item: 'Spyware Removal',
        price: '99.99',
        description: 'This is to remove malware',
        checked: false
      },
      {
        item: 'RAM Upgrade',
        price: '129.99',
        description: 'This is to upgrade your RAM',
        checked: false
      },
      {
        item: 'Software Installation',
        price: '49.99',
        description: 'This is to install software',
        checked: false
      },
      {
        item: 'Tune-up',
        price: '89.99',
        description: 'This is for a tune-up',
        checked: false
      },
      {
        item: 'Keyboard Cleaning',
        price: '45.00',
        description: 'This is for Keyboard Cleaning',
        checked: false
      },
      {
        item: 'Disk Clean-up',
        price: '149.99',
        description: 'This is for disk clean-up',
        checked: false
      }
    ]
   }
  //  This changes the checked items to true if it is check. This sets us up for calculations.
   isChecked(item){
    if (item.checked) {
      item.checked = false
      console.log("this is unchecked.")
    } else {
      item.checked = true
      console.log("this is checked.")
    }
   }

  //  This grabs the repair forms controls (from the inputs of selection) from the html page.
   get repairFormArray() {
    return this.repairForm.controls;
  }


   ngOnInit(): void {
    // This creates the new angular form, parts and labor are empty arrays to push data into them .
    this.repairForm = this.fb.group({
      parts: [''],
      labor: ['']
    })
  }

  // This function is for submit.
  onSubmit(){
    // Pushing into the new array
    this.selectedRepairs = []
    let totalPrice: number = 0;
    // Inserting todays date
    let todayDate: Date = new Date();
    // This will iterate through the repairs list
    for(let value of this.repairs_list){
      // console.log(this.repairs_list);
      // IF the value is checked, it will display the value and push into the invoice dialog box.
      if (value.checked) {
        console.log(value.checked + value.item);
        // This pushes into the new array for dialog.
        this.selectedRepairs.push({
          item: value.item,
          price: value.price
        });
        console.log(this.selectedRepairs)
        // This is adding up all the prices that are checked
        totalPrice += Number(value.price)
        console.log(totalPrice);
      }
    }
    // This is grabbing the value in the parts input adding it to the totalprice and pushing that data into the invoice summary
    if (this.repairFormArray.parts.value){
      totalPrice += this.repairFormArray.parts.value;
      this.selectedRepairs.push({
        item: "Parts",
        price: this.repairFormArray.parts.value
      })
    }
    // This is grabbing the value in the labor input adding it to the totalprice and pushing that data into the invoice summary
    if (this.repairFormArray.labor.value){
      totalPrice += this.repairFormArray.labor.value * 50;
      this.selectedRepairs.push({
        item: "Labor",
        price: this.repairFormArray.labor.value * 50
      })
    }
    console.log("This is parts" + this.repairFormArray.parts.value)
    // This is for the invoice summary pop up window.
    const dialogRef = this.dialog.open(InvoiceDetailsDialogComponent, {
        data: {
          repair: this.selectedRepairs,
          totalPrice: totalPrice,
          todayDate: todayDate
        },
        disableClose: true,
        width: '800px'
      });
      // This is to close and restart the diaglogRef
      dialogRef.afterClosed().subscribe(result => {if (result === 'confirm') {this.repair = null}});
    console.log("Submit Click Successful!");
  }
}

