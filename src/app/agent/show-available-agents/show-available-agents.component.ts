import { AgentService } from '../../shared/agent.service';
import { Component, OnInit } from '@angular/core';
import Agent from 'src/app/models/agent.model';

@Component({
  selector: 'app-show-available-agents',
  templateUrl: './show-available-agents.component.html',
  styleUrls: ['./show-available-agents.component.css']
})
export class ShowAvailableAgentsComponent implements OnInit {

  constructor(private shared: AgentService) { }
  AgentList:Agent[];

  ngOnInit(): void {
    this.refreshAgentList();
  }

  refreshAgentList(){
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.shared.getAvailableAgents(bossId).subscribe(data=>{
      this.AgentList=data;
    });
  }

  deleteAgent(agent: Agent): void
  {
    if(confirm('Are you sure??')){
        agent.BossId=null;
        this.shared.updateAgent(agent).subscribe(data=>{
          alert(data.toString());
          this.refreshAgentList();
        })
    }
  }
}
