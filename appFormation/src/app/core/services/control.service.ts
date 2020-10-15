import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean  {
    if(localStorage.username){
      return true;
    }
    this.router.navigate([`/home`]);
    return false;
  }

}
