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

  deleteMessage(val:number){
    return this.http.delete(this.APIUrl+'/message/'+val);
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
  Content:string
}

