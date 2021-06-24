import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  readonly APIUrl="http://localhost:53191";

  constructor(private http:HttpClient) { }

  getAllMessages(bossId: number):Observable<Message[]>{
    return this.http.get<Message[]>(this.APIUrl+'/messageTo/'+bossId);
  }
}

export interface Message
{
  MessageId: number
  ToBoss:string,
  FromBoss:string,
  Content:string
}

