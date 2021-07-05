import { PerformingMissionService } from './../../shared/performingmission.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Agent, AgentService } from 'src/app/shared/agent.service';
import { Mission, MissionService } from 'src/app/shared/mission.service';

@Component({
  selector: 'app-perform-mission',
  templateUrl: './perform-mission.component.html',
  styleUrls: ['./perform-mission.component.css']
})
export class PerformMissionComponent implements OnInit {

  constructor(private agentShared: AgentService, private missionShared: MissionService, private performingShared: PerformingMissionService) { }

  MissionList: Mission[]
  AgentList: Agent[]
  MissionStringList: string[]
  AgentStringList: string[]
  ShowInformationAboutMission: boolean=false;
  ChanceOfSuccess: number
  @Input() ChosenMissionId: number
  ChosenMission: string
  ChosenMissionInstance: Mission
  ChosenAgent: string
  ChosenAgentInstance: Agent
  @Output() returnBtn = new EventEmitter();

  ngOnInit(): void {
    const bossId=Number(sessionStorage.getItem("bossId"))
    this.agentShared.getAvailableAgentsList(bossId).subscribe(data=>{
      this.AgentList=data
      this.AgentStringList=data.map(agent=>agent.LastName+" "+agent.FirstName)
    });


    this.missionShared.getAvailableMissionList().subscribe(data=>{
      this.MissionList=data
      this.MissionStringList=data.map(mission=>mission.Name)
      this.ChosenMission=this.MissionList
      .filter(mission=>mission.Id==this.ChosenMissionId)[0].Name
    });
  }

  backToShowMission()
  {
    this.returnBtn.emit();
  }

  addPerformingMission()
  {
    this.performingShared.addPerformingMission
    (
      {
        MissionId: this.ChosenMissionInstance.Id,
        AgentId: this.ChosenAgentInstance.Id
      }
    )
    .subscribe(data=>{
      alert(data.toString());
      this.backToShowMission();
    })
  }

  checkIfProgramShouldShowInformationAboutPerform()
  {
    if(
      this.ChosenAgent != null &&
      this.ChosenMission != null &&
      this.ChosenAgent != '--Select--' &&
      this.ChosenMission != '--Select--'
    )
    {
      this.ShowInformationAboutMission=true;
      this.ChosenMissionInstance=this.MissionList.filter(mission=>mission.Name==this.ChosenMission)[0]
      this.ChosenAgentInstance=this.AgentList.filter(agent=>(agent.LastName+" "+agent.FirstName) == this.ChosenAgent)[0]
      this.ChanceOfSuccess=Math.ceil(((11-this.ChosenMissionInstance.DifficultyLevel)+(this.ChosenAgentInstance.Strength))*100/22)

    }
    else
    {
      this.ShowInformationAboutMission=false;
    }
  }
}
