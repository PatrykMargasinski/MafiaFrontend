import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import Mission from 'src/app/models/mission.model';
import PerformingMission from 'src/app/models/performing-mission.model';
import { PerformingMissionService } from 'src/app/shared/performingmission.service';

@Component({
  selector: 'app-in-progress-mission-list',
  templateUrl: './in-progress-mission-list.component.html',
  styleUrls: ['./in-progress-mission-list.component.css']
})
export class InProgressMissionListComponent implements OnInit {

  @Output() refresher = new EventEmitter();
  @Input() inProgress: PerformingMission[]

  constructor() { }

  ngOnInit(): void {

  }
}
