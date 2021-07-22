import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  errorMessage: string;

  constructor(private router: Router, private http: HttpClient) { }

  login(form: NgForm) {
    const credentials = {
      'nick': form.value.nick,
      'password': form.value.password
    }
  
    this.http.post(environment.APIEndpoint + "/login", credentials)
      .subscribe(response => {
        const token = (<any>response).Token;
        sessionStorage.setItem("jwtToken", token);
        const bossId = (<any>response).BossId;
        sessionStorage.setItem("bossId", bossId);
        this.invalidLogin = false;
        this.router.navigate(["/boss"]);
      }, err => {
        this.invalidLogin = true;
        if(err.name=='HttpErrorResponse')
          this.errorMessage='Website is unable to connect with server'
        else{
          this.errorMessage = err.error;
        }
      })
  }
}
