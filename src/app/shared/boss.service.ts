import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BossService {

  readonly APIUrl = environment.APIEndpoint

  constructor(private http:HttpClient) { }

  getBoss(id:number):Observable<Boss>
  {
    return this.http.get<Boss>(this.APIUrl+'/boss/'+id);
  }

  getBossIdByName(name:string):Observable<number>
  {
    return this.http.get<number>(this.APIUrl+'/boss/GetNameById/'+name);
  }

  getBossIdByPlayerNick(nick:string):Observable<number>
  {
    return this.http.get<number>(this.APIUrl+'/boss/GetIdByPlayerNick/'+nick);
  }

  getBossId(str: string, isBossName: boolean):Observable<number>
  {
    if(isBossName==true) return this.getBossIdByName(str.replace(' ',''))
    else return this.getBossIdByPlayerNick(str)
  }
}

export interface Boss
{
  BossId: number,
  LastName: string,
  FirstName: string,
  Money: number,
  LastSeen: string
}
