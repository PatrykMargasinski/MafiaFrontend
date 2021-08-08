import { BossService } from 'src/app/shared/boss.service';
import { Component, OnInit } from '@angular/core';
import { Boss } from '../models/boss.model';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {
  boss: Boss ={} as Boss

  constructor(private bossService: BossService) { }

  ngOnInit(): void {
    this.bossService.getBoss(Number(sessionStorage.getItem("bossId"))).subscribe(data=>{
      this.boss=data;
    })
  }

}
