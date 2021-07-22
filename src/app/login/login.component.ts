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
        console.log(err);
        this.invalidLogin = true;
        if(err.status==0)
          this.errorMessage='Website is unable to connect with server'
        else if(err.status==400){ 
          this.errorMessage = err.error; 
        }        
        else{ 
          this.errorMessage = 'Unknown error';
        }
      })
  }
}
