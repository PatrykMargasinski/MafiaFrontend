import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  canActivate(){
    const token = sessionStorage.getItem("jwtToken");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      console.log(this.jwtHelper.decodeToken(token))
      return true
    }
    else{ 
      this.router.navigateByUrl("");
      return false
    }
  }
}
