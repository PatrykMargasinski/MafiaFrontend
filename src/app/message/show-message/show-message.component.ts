import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message, MessageService } from 'src/app/shared/message.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  constructor(private shared: MessageService) { }
  MessageList: Message[];
  MessageFilteredList: Message[];
  ReceiverFilterText: string = "";
  ContentFilterText: string = "";

  @Output() swapEvent = new EventEmitter<number>();

  ngOnInit(): void {
    this.refreshMessageList()
  }

  showSendMessageWindow(){
    this.swapEvent.emit();
  }

  refreshMessageList(){
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.shared.getAllMessages(bossId).subscribe(data=>{
      this.MessageList=data;
      this.MessageFilteredList=data;
    });
  }

  filterList(){
    this.MessageFilteredList=this.MessageList.filter(x=>
      x.FromBoss.toLowerCase().includes(this.ReceiverFilterText.toLowerCase()) &&
      x.Content.toLowerCase().includes(this.ContentFilterText.toLowerCase()))
  }

  deleteMessage(messageId: number): void{
    if(confirm('Are you sure??')){
      this.shared.deleteMessage(messageId).subscribe(data=>{
        alert(data.toString());
        this.refreshMessageList();
      });
    }
  }
}
