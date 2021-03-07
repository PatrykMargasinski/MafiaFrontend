import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-missions',
  templateUrl: './show-missions.component.html',
  styleUrls: ['./show-missions.component.css']
})
export class ShowMissionsComponent implements OnInit {

  constructor(private shared: SharedService) { }

  MissionList: any=[]

  ngOnInit(): void {
    this.refreshMissionList();
  }

  refreshMissionList(){
    this.shared.getMissionList().subscribe(data=>{
      this.MissionList=data;
    });
  }

}
