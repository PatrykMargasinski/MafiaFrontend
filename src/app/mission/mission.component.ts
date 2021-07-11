import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import Mission from '../models/mission.model';
import PerformingMission from '../models/performing-mission.model';
import { MissionService } from '../shared/mission.service';
import { PerformingMissionService } from '../shared/performingmission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  public missions: Mission[]
  public inProgress: PerformingMission[]
  private subscription: Subscription

  constructor(
    private missionSerice: MissionService,
    private pmService: PerformingMissionService) { }

  ngOnInit(): void {
    this.refreshAll()
  }

  refreshAll() {
    this.refreshMissions()
    this.refreshPerformingMissions()
  }

  private refreshMissions() {
    this.missionSerice.getAvailableMissions().subscribe(data => {
      this.missions = data
    })
  }

  private refreshPerformingMissions() {
    this.pmService.getPerformingMissions().subscribe(data => {
      this.inProgress = data
      this.countdown()
    })
  }

  private countdown() {
    this.inProgress.forEach(it => {
      this.subscription = interval(1000)
        .subscribe(x => {this.setTime()})
    })
  }

  private setTime() {
    this.inProgress.forEach(mission => {
      mission.leftTime = Math.ceil((new Date(mission.EndTime).getTime() - Date.now())/1000)
      if(mission.leftTime <= 0) {
        this.refreshAll()
      }
    });
  }

}
