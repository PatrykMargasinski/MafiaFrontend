import { Component, OnInit } from '@angular/core';
import Agent from 'src/app/models/agent.model';
import { AgentService } from 'src/app/shared/agent.service';

@Component({
  selector: 'app-agents-for-sale',
  templateUrl: './agents-for-sale.component.html',
  styleUrls: ['./agents-for-sale.component.css']
})

export class AgentsForSaleComponent implements OnInit {

  constructor(private shared: AgentService) { }
  AgentsForSale:Agent[];

  ngOnInit(): void {
    this.refreshAgentToRecruitmentList();
  }

  refreshAgentToRecruitmentList(){
    this.shared.getAgentsForSaleList().subscribe(data=>{
      this.AgentsForSale=data;
    });
  }

  
  recruitAgent(agent: Agent): void
  {
    if(confirm('Are you sure??')){
        agent.BossId=Number(sessionStorage.getItem("bossId"));
        this.shared.updateAgent(agent).subscribe(data=>{
          alert(data.toString());
          this.refreshAgentToRecruitmentList();
        })
    }
  }
}
