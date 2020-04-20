import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  user = new User();

  constructor(private router: Router) { }

  canActivate() {    
    this.user = JSON.parse(localStorage.getItem('user'));

    if (this.user) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}