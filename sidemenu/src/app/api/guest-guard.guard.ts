import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardGuard implements CanActivate {
 constructor(private router: Router) {}

   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      	if (localStorage.getItem('access_token')) {
			 //console.log('User is not logged in');
          this.router.navigate(['/home']);
          resolve(false);
        } else {
          resolve(true);
        }
    });
  }
}