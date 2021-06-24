import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from '../shared/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private shared: MessageService) { }
  MessageList:Message[];

  ngOnInit(): void {
    this.refreshMessageList()
  }

  refreshMessageList(){
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.shared.getAllMessages(bossId).subscribe(data=>{
      this.MessageList=data;
    });
  }

}
