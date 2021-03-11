import { Boss, BossService } from 'src/app/shared/boss.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  boss: Boss = {} as Boss;

  constructor(private bossService:BossService) { }

  ngOnInit(): void {
    this.bossService.getBoss().subscribe(data=>{
      this.boss=data;
    })
  }

}
