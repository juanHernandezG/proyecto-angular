import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  
  constructor(private loginService: LoginService, private router:Router){}
  
  canActivate() {
    if(!this.loginService.logueado){
      console.log('no estas logueado');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
