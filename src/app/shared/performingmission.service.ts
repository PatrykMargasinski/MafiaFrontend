import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformingMissionService {

  readonly APIUrl="http://localhost:5000";

  constructor(private http:HttpClient) { }

  getPerformingMissionList():Observable<PerformingMission[]>{
    return this.http.get<PerformingMission[]>(this.APIUrl+'/performingmission');
  }

  addPerformingMission(val: any){
    return this.http.post(this.APIUrl+"/performingmission",val);
  }
}

export interface PerformingMission
{
  PerformingMissionId: number,
  Name: string,
  AgentName: string,
  ChanceOfSuccess: number
}
