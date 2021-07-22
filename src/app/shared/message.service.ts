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

  getMessageCount(bossId: number):Observable<number>{
    return this.http.get<number>(this.APIUrl+'/messageCount/'+bossId);
  }

  getAllMessages(bossId: number, fromRange: number, toRange:number, bossNameFilter, onlyUnseen: boolean):Observable<Message[]>{
    return this.http.get<Message[]>(this.APIUrl+'/messageTo/'+bossId+'?fromRange='+fromRange+'&toRange='+toRange+'&bossNameFilter='+bossNameFilter+'&onlyUnseen='+onlyUnseen);
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

  getMessageContent(val: number){
    return this.http.get(this.APIUrl+'/messageContent/'+val);
  }
}

export interface Message
{
  MessageId: number,
  ToBoss:string,
  FromBoss:string,
  Subject:string,
  Date: string,
  Seen: boolean
}

