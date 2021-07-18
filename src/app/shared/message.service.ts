import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  readonly APIUrl = environment.APIEndpoint

  constructor(private http:HttpClient) { }

  getAllMessages(bossId: number):Observable<Message[]>{
    return this.http.get<Message[]>(this.APIUrl+'/messageTo/'+bossId);
  }

  getMessageCount(bossId: number):Observable<number>{
    return this.http.get<number>(this.APIUrl+'/messageCount/'+bossId);
  }

  getAllMessagesRange(bossId: number, fromRange: number, toRange:number, bossNameFilter):Observable<Message[]>{
    return this.http.get<Message[]>(this.APIUrl+'/messageToRange/'+bossId+'?fromRange='+fromRange+'&toRange='+toRange+'&bossNameFilter='+bossNameFilter);
  }

  deleteMessage(val:number){
    return this.http.delete(this.APIUrl+'/message/'+val);
  }

  deleteMessages(val:number[]){
    return this.http.delete(this.APIUrl+'/messages?stringIds='+val.join('i'));
  }

  sendMessage(val: any){
    return this.http.post(this.APIUrl+'/message/',val);
  }
}

export interface Message
{
  MessageId: number,
  ToBoss:string,
  FromBoss:string,
  Content:string,
  Date: string
}

