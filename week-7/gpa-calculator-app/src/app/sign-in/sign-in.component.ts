/**
 * Title: sign-in.component.ts
 * Author: Devan Wong
 * Date: 10 February 2021
 * Description: sign-in component | Reactive Forms  -- more control on how we populate and access the values inside
 */
// This was auto generated
import { Component, OnInit } from '@angular/core';
// Importing signin service
import { SignInService } from '../sign-in.service';
// Importing Router
import { Router } from '@angular/router';
// Importing Form Builder, form group, validators
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Importing cookieservice
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // Creating two class fields  to call signin type form & error message type string
  signinForm: FormGroup;
  errorMessage: string;
  // Passing in cookieservice, router, form build, and sign in into the constructor
  constructor( private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {

   }

  ngOnInit(): void {
    // Building out the sign in form. To create a new angular form | premise of a reactive form | .group using to build a group of items
    this.signinForm = this.fb.group({
      // Creating validators to only accept numbers.
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }
   // This is a helper function to return the form controls.
   get form(){
    return this.signinForm.controls;
  }
  // onSubmit event used when a user clicks submit we capture values
    onSubmit(){
      // formvalues will grab the form values
      const formValues = this.signinForm.value;
      // studentId hold the studentId value
      const studentId = parseInt(formValues.studentId);
      // This checks the sign in service to check the student ID value from the signin form is a valid value
      // If true we set the cookie in the browser and route them back to the home screen
      if (this.signinService.validate(studentId)){
        this.cookieService.set('session_user', studentId.toString(), 1);
        this.router.navigate(['/'])
      }
      // Else the ID is not a valid id, return error message.
      else {
        this.errorMessage = 'The student ID you entered is invalid. Please try again.'
      }
    }

}
