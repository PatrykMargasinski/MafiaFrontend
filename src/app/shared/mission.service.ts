import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.copy';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  readonly APIUrl = environment.APIEndpoint

  constructor(private http:HttpClient) { }

  getMissionList():Observable<Mission[]>{
    return this.http.get<Mission[]>(this.APIUrl+'/mission');
  }

  getAvailableMissionList():Observable<Mission[]>{
    return this.http.get<Mission[]>(this.APIUrl+'/GetAvailableMissions');
  }

  addMission(val:Mission){
    return this.http.post(this.APIUrl+'/mission',val);
  }

  updateMission(val:Mission){
    return this.http.put(this.APIUrl+'/mission',val);
  }

  deleteMission(val:Mission){
    return this.http.delete(this.APIUrl+'/mission/'+val);
  }
}


export interface Mission
{
  Id:number,
  Name:string,
  DifficultyLevel:number,
  Loot:number
}
