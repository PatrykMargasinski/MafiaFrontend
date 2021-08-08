import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private http: HttpClient) { }

  oldPass: string
  newPass: string
  newPass2: string

  ngOnInit(): void {
  }

  changePassword(){

    if(this.oldPass===""){
      alert("Old password cannot be empty");
    }

    else if(this.newPass===""){
      alert("New password cannot be empty");
    }

    else if(this.newPass2===""){
      alert("Repeated new password cannot be empty");
    }

    else if(this.newPass!==this.newPass2){
      alert("Wrong repeated password");
    }

    else{

      var changeModel=
      {
        PlayerId: sessionStorage.getItem("playerId"),
        OldPassword: this.oldPass,
        NewPassword: this.newPass
      }

      this.http.put(environment.APIEndpoint + "/changePassword", changeModel)
      .subscribe(data=>{
        alert("Password changed");
      }, err=>{
        console.log(err);
        alert(err.error);
      });
    }
  }

}
