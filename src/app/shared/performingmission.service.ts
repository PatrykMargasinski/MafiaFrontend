import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformingMissionService {

  readonly APIUrl="http://localhost:53191";

  constructor(private http:HttpClient) { }

  getPerformingMissionList():Observable<PerformingMission[]>{
    return this.http.get<PerformingMission[]>(this.APIUrl+'/performingmission');
  }
}

export interface PerformingMission
{
  PerformingMissionId: number,
  MissionName: string,
  AgentName: string,
  ChanceOfSuccess: number
}
