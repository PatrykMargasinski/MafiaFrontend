import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Agent from '../models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  readonly APIUrl = environment.APIEndpoint + '/agent'

  constructor(private http: HttpClient) { }

  getAgentList(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.APIUrl);
  }

  getAvailableAgents(bossId: number): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.APIUrl + '/available/' + bossId);
  }

  getAgentsOnMission(bossId: number): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.APIUrl + '/onMission/' + bossId);
  }

  getAgentsForSaleList(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.APIUrl + '/forSale');
  }

  addAgent(val: Agent) {
    return this.http.post(this.APIUrl, val);
  }

  updateAgent(val: Agent) {
    return this.http.put(this.APIUrl, val);
  }

  deleteAgent(val: Agent) {
    return this.http.delete(this.APIUrl + '/' + val);
  }
}
