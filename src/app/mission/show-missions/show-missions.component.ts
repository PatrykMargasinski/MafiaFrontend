import { PerformingMissionService, PerformingMission } from '../../shared/performingmission.service';
import { MissionService, Mission } from './../../shared/mission.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-missions',
  templateUrl: './show-missions.component.html',
  styleUrls: ['./show-missions.component.css']
})
export class ShowMissionsComponent implements OnInit {

  constructor(private missionShared: MissionService, private performingShared: PerformingMissionService) { }

  MissionList: Mission[]
  PerformingMissionList: PerformingMission[]
  @Output() orderToPerformBtn = new EventEmitter<number>();

  orderToPerform(missionId: number)
  {
    this.orderToPerformBtn.emit(missionId);
  }

  ngOnInit(): void {
    this.refreshMissionList();
    this.refreshPerformingMissionList();
  }

  refreshMissionList(){
    this.missionShared.getAvailableMissionList().subscribe(data=>{
      this.MissionList=data;
    });
  }

  refreshPerformingMissionList(){
    this.performingShared.getPerformingMissionList().subscribe(data=>{
      this.PerformingMissionList=data;
    });
  }
}
