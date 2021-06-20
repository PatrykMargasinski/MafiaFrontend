import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(private router: Router, private http: HttpClient) { }

  login(form: NgForm) {
    const credentials = {
      'nick': form.value.nick,
      'password': form.value.password
    }

    this.http.post("http://localhost:53191/auth", credentials)
      .subscribe(response => {
        const token = (<any>response).Token;
        sessionStorage.setItem("jwtToken", token);
        this.invalidLogin = false;
        this.router.navigate(["/boss"]);
      }, err => {
        this.invalidLogin = true;
      })
  }
}
