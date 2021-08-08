import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Agent from 'src/app/models/agent.model';
import { AgentService } from 'src/app/shared/agent.service';
import { MissionService } from 'src/app/shared/mission.service';

@Component({
  selector: 'app-agent-table',
  templateUrl: './agent-table.component.html',
  styleUrls: ['./agent-table.component.css']
})
export class AgentTableComponent implements OnInit {

  @Input() missionId: number
  @Output() someEvent = new EventEmitter();
  agents: Agent[]

  constructor(
    private agentService: AgentService,
    private missionService: MissionService,
    ) {

    }

  ngOnInit(): void {
    console.log("HEJ")
    this.getAgents();
  }

  getAgents(){
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.agentService.getAvailableAgents(bossId).subscribe(data=>{
      this.agents = data
      console.log(this.agents)
    })
  }

  doMission(agentId: number){
    this.missionService.doMission(agentId, this.missionId).subscribe(it=>{
      this.someEvent.next()
    })
  }
}


