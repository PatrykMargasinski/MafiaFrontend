import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.copy';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  readonly APIUrl = environment.APIEndpoint

  constructor(private http:HttpClient) { }

  getAgentList():Observable<Agent[]>{
    return this.http.get<Agent[]>(this.APIUrl+'/agent');
  }

  getAvailableAgentsList(bossId: number):Observable<Agent[]>{
    return this.http.get<Agent[]>(this.APIUrl+'/GetAvailableAgents/'+bossId);
  }

  getAgentsForRecruitmentList():Observable<Agent[]>{
    return this.http.get<Agent[]>(this.APIUrl+'/GetAgentsForRecruitment');
  }

  addAgent(val:Agent){
    return this.http.post(this.APIUrl+'/agent',val);
  }

  updateAgent(val:Agent){
    return this.http.put(this.APIUrl+'/agent',val);
  }

  deleteAgent(val:Agent){
    return this.http.delete(this.APIUrl+'/agent/'+val);
  }
}

export interface Agent
{
  Id: number,
  BossId: number,
  LastName: string,
  FirstName: string,
  Strength: number,
  Income: number
}
