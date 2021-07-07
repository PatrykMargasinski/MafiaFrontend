import { PerformingMissionService, PerformingMission } from '../../shared/performingmission.service';
import { MissionService, Mission } from './../../shared/mission.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AgentService } from 'src/app/shared/agent.service';

@Component({
  selector: 'app-show-missions',
  templateUrl: './show-missions.component.html',
  styleUrls: ['./show-missions.component.css']
})
export class ShowMissionsComponent implements OnInit {

  constructor(
    private missionShared: MissionService, 
    private performingShared: PerformingMissionService,
    private agentShared: AgentService
    ) { }

  MissionList: Mission[]
  PerformingMissionList: PerformingMission[]
  @Output() orderToPerformBtn = new EventEmitter<number>();

  orderToPerform(missionId: number)
  {
    this.agentShared.getAvailableAgentsList(Number(sessionStorage.getItem("bossId"))).subscribe(
      x=>
      {
        if(x.length==0)
          alert("No available agent")
        else
          this.orderToPerformBtn.emit(missionId);
      }
    )
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
