import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  ShowMissions: boolean=true;
  OrderToPerformMission: boolean=false
  ChosenMissionToPerform: number

  constructor() { }

  proba(missionId: number){
    this.ChosenMissionToPerform=missionId
  }

  ngOnInit(): void {
  }

}
