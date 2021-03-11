import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  readonly APIUrl="http://localhost:53191";

  constructor(private http:HttpClient) { }

  getMissionList():Observable<Mission[]>{
    return this.http.get<Mission[]>(this.APIUrl+'/mission');
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
  MissionId:number,
  MissionName:string,
  DifficultyLeve:number,
  Loot:number
}
