import { AgentService } from './../../shared/agent.service';
import { Component, OnInit } from '@angular/core';
import Agent from 'src/app/models/agent.model';

@Component({
  selector: 'app-show-agents',
  templateUrl: './show-agents.component.html',
  styleUrls: ['./show-agents.component.css']
})
export class ShowAgentsComponent implements OnInit {

  constructor(private shared: AgentService) { }
  AgentList:Agent[];
  AgentsForRecruitment:Agent[];

  ngOnInit(): void {
    this.refreshAgentList();
    this.refreshAgentToRecruitmentList();
  }

  refreshAgentList(){
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.shared.getAvailableAgents(bossId).subscribe(data=>{
      this.AgentList=data;
    });
  }

  refreshAgentToRecruitmentList(){
    this.shared.getAgentsForRecruitmentList().subscribe(data=>{
      this.AgentsForRecruitment=data;
    });
  }

  deleteAgent(agent: Agent): void
  {
    if(confirm('Are you sure??')){
        agent.BossId=null;
        this.shared.updateAgent(agent).subscribe(data=>{
          alert(data.toString());
          this.refreshAgentList();
          this.refreshAgentToRecruitmentList();
        })
    }
  }

  recruitAgent(agent: Agent): void
  {
    if(confirm('Are you sure??')){
        agent.BossId=Number(sessionStorage.getItem("bossId"));
        this.shared.updateAgent(agent).subscribe(data=>{
          alert(data.toString());
          this.refreshAgentList();
          this.refreshAgentToRecruitmentList();
        })
    }
  }
}
