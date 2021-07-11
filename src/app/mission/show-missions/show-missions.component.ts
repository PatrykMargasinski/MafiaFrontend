import { MissionService } from './../../shared/mission.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Mission from 'src/app/models/mission.model';

@Component({
  selector: 'app-show-missions',
  templateUrl: './show-missions.component.html',
  styleUrls: ['./show-missions.component.css']
})
export class ShowMissionsComponent implements OnInit {

  @Output() refresher = new EventEmitter()
  @Input() missions: Mission[]
  missionId: number = 10

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

  }

  closeAndRefresh() {
    this.modalService.dismissAll();
    this.refresher.next();
  }

  changeMissionId(missionId: number){
    this.missionId = missionId
  }
}
