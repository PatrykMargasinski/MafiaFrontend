import { Component, OnInit } from '@angular/core';
import PerformingMission from 'src/app/models/performing-mission.model';
import { PerformingMissionService } from 'src/app/shared/performingmission.service';

@Component({
  selector: 'app-show-agents-on-mission',
  templateUrl: './show-agents-on-mission.component.html',
  styleUrls: ['./show-agents-on-mission.component.css']
})
export class ShowAgentsOnMissionComponent implements OnInit {

  constructor(private pmService: PerformingMissionService) { }

  PerformingMissions: PerformingMission[]

  ngOnInit(): void {
    this.refreshAgentsOnMission();
  }

  refreshAgentsOnMission() {
    this.pmService.getPerformingMissions().subscribe(data => {
      this.PerformingMissions = data
    })
  }

}
