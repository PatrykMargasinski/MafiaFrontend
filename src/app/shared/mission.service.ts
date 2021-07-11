import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Mission from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  readonly APIUrl = environment.APIEndpoint + '/mission'

  constructor(private http: HttpClient) { }

  getMissionList(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.APIUrl);
  }

  getAvailableMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.APIUrl + '/GetAvailableMissions');
  }

  addMission(val: Mission) {
    return this.http.post(this.APIUrl, val);
  }

  updateMission(val: Mission) {
    return this.http.put(this.APIUrl, val);
  }

  deleteMission(val: Mission) {
    return this.http.delete(this.APIUrl + '/' + val);
  }

  doMission(agentId: number, missionId: number) {
    const body = {
      agentId: agentId,
      missionId: missionId
    }
    return this.http.post(this.APIUrl + '/start', body)
  }
}
