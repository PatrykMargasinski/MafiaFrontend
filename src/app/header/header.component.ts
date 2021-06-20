import { Boss, BossService } from 'src/app/shared/boss.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isUserAuthenticated(){
    const token: string = localStorage.getItem("jwt");
    if(token){
      return true;
    }
    else{
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("jwt");
  }

  ngOnInit(): void {
  }

}
