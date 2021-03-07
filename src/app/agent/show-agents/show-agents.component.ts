import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-agents',
  templateUrl: './show-agents.component.html',
  styleUrls: ['./show-agents.component.css']
})
export class ShowAgentsComponent implements OnInit {

  constructor(private shared: SharedService) { }

  AgentList:any=[];
  AgentsForRecruitment:any=[];

  ngOnInit(): void {
    this.refreshAgentList();
  }

  refreshAgentList(){
    this.shared.getAgentList().subscribe(data=>{
      this.AgentList=data;
    });

    this.shared.getAgentsForRecruitmentList().subscribe(data=>{
      this.AgentsForRecruitment=data;
    });
  }

  deleteAgent(agent: any): void
  {
    console.log("Jestem")
    if(confirm('Are you sure??')){
      this.shared.deleteAgent(agent.AgentId).subscribe(data=>{
        alert(data.toString());
        this.refreshAgentList();
      })
    }
  }
}
