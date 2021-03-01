/**
 * Title: invoice-details-dialog.component.ts
 * Author: Devan Wong
 * Date: 28 Feb 2021
 * Description: invoice details for dialog
 */
// This was auto generated
import { Component, OnInit, Inject } from '@angular/core';
// This was manually Imported
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRepair } from '../repair.interface';

@Component({
  selector: 'app-invoice-details-dialog',
  templateUrl: './invoice-details-dialog.component.html',
  styleUrls: ['./invoice-details-dialog.component.css']
})
export class InvoiceDetailsDialogComponent implements OnInit {
  // Creating variables to details .
  repairs: Array<IRepair> = [];
  totalPrice: number;
  todayDate: Date;
  // We are dependency injecting so we can have data
  constructor(private dialogRef: MatDialogRef<InvoiceDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.repairs = data.repair;
    this.totalPrice = data.totalPrice;
    this.todayDate = data.todayDate;
  }

  ngOnInit(): void {
  }

}
