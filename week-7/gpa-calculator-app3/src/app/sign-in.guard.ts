/**
 * Title: sign-in.guard.ts
 * Author: Devan Wong
 * Date: 9 February 2021
 * Description: sign-in guard component
 */
// This was auto generated
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// Importing router.
import { Router } from '@angular/router';
// Importing cookie service.
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  // adding the constructor so we can import the cookie service
  constructor(private router: Router, private cookieService: CookieService ) {
  }
  // canActivate has to return a true or false value.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Call the cookieservice with .get() to find the cookie that is added to the browser once the user signs into the app
    const sessionUser = this.cookieService.get('session_user');
    // If statement is used to check if something is being returned from the session. If true then there is a user logged in. Else is empty then renavigate to the sign in component.  [needs to have a return false ]
    if(sessionUser){
      return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }

}
