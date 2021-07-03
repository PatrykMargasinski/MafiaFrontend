import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerErrorMessage: string
  registerError: boolean
  constructor(private router: Router, private http: HttpClient) { }

  register(form: NgForm) {
    const credentials = {
      'Nick': form.value.nick,
      'Password': form.value.password,
      'BossFirstName': form.value.firstname,
      'BossLastName': form.value.lastname,
      'AgentNames': [form.value.agent1, form.value.agent2, form.value.agent3]
    }
    console.log(credentials);
    this.http.post(environment.APIEndpoint + "/register", credentials)
    .subscribe(data=>{
      alert("Registration finished. You get 5000$ and 3 agents. That's how your journey begins.");
      this.registerError=false
      this.router.navigate(["/login"]);
    }, err=>{
      console.log(err);
      this.registerError=true;
      this.registerErrorMessage=err.error;
    });
  }

  ngOnInit(): void {
  }

}
