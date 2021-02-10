/**
 * Title: gpa.component.ts
 * Author: Devan Wong
 * Date: 5 February 2021
 * Description: gpa component
 */
// This was autogenerated
// Adding input for parent child communication
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  // The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.
  // This is the child component.
  @Input() gpaTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}