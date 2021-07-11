import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import PerformingMission from '../models/performing-mission.model';

@Injectable({
  providedIn: 'root'
})
export class PerformingMissionService {

  readonly APIUrl = environment.APIEndpoint

  constructor(private http: HttpClient) { }

  getPerformingMissions(): Observable<PerformingMission[]> {
    return this.http.get<PerformingMission[]>(this.APIUrl + '/performingmission?bossId=' + sessionStorage.getItem("bossId"));
  }

  addPerformingMission(val: any) {
    return this.http.post(this.APIUrl + "/performingmission", val);
  }

}
