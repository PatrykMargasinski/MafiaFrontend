import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:53191";

  constructor(private http:HttpClient) { }

  getMissionList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/mission');
  }

  getAgentsForRecruitmentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/GetAgentsForRecruitment');
  }

  addMission(val:any){
    return this.http.post(this.APIUrl+'/mission',val);
  }

  updateMission(val:any){
    return this.http.put(this.APIUrl+'/mission',val);
  }

  deleteMission(val:any){
    return this.http.delete(this.APIUrl+'/mission/'+val);
  }


  getAgentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/agent');
  }

  addAgent(val:any){
    return this.http.post(this.APIUrl+'/agent',val);
  }

  updateAgent(val:any){
    return this.http.put(this.APIUrl+'/agent',val);
  }

  deleteAgent(val:any){
    return this.http.delete(this.APIUrl+'/agent/'+val);
  }

  getBoss():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/boss');
  }
}
