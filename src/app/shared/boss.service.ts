import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BossService {

  readonly APIUrl="http://localhost:53191";

  constructor(private http:HttpClient) { }

  getBoss(id:number):Observable<Boss>
  {
    return this.http.get<Boss>(this.APIUrl+'/boss/'+id);
  }

  getBossIdByName(name:string):Observable<number>
  {
    return this.http.get<number>(this.APIUrl+'/boss/GetNameById/'+name);
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
