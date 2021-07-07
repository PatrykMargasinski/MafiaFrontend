import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerformingMissionService {

  readonly APIUrl = environment.APIEndpoint

  constructor(private http:HttpClient) { }

  getPerformingMissionList():Observable<PerformingMission[]>{
    return this.http.get<PerformingMission[]>(this.APIUrl+'/performingmission/byBossId/'+sessionStorage.getItem("bossId"));
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
  ChanceOfSuccess: number,
  CompletionTime: string
}
