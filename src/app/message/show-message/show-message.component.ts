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
  PageNumbers: number[];
  MessageIdsForActions: number[];
  OnlyUnseen:boolean = false;

  @Output() swapEvent = new EventEmitter<number>();

  ngOnInit(): void {
    this.refreshMessageList()
  }

  stringDateConvert(stringDate: string) {
    var d = new Date(stringDate);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da}-${mo}-${ye}`
  }

  showSendMessageWindow(){
    this.swapEvent.emit();
  }

  clearFilters(){
    console.log("HEJ")
    this.ReceiverFilterText="";
    this.OnlyUnseen=false;
    this.refreshMessageList();
  }

  refreshMessageList(){
    this.MessageIdsForActions=new Array<number>();
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.shared.getMessageCount(bossId).subscribe(data=>{
      let bossMessagesCount = data;
      this.PageNumbers=new Array<number>();
      for(let i=0;i<bossMessagesCount;i+=5)
      {
        this.PageNumbers.push(i)
      }
    })
    this.getNextPage(0,5)
  }

  getNextPage(fromRange: number, toRange: number)
  {
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.shared.getAllMessages(
      bossId, 
      fromRange, 
      toRange, 
      this.ReceiverFilterText.toLowerCase(),
      this.OnlyUnseen)
    .subscribe(data=>{
      this.MessageList=data;
      this.MessageFilteredList=data;
    });
  }

  checkboxClicked(ev, MessageId){
    if(ev.target.checked==true)
      this.MessageIdsForActions.push(MessageId);
    else
    {
      const index = this.MessageIdsForActions.indexOf(MessageId);
      if (index > -1) {
        this.MessageIdsForActions.splice(index, 1);
      }
    }
  }

  showContent(messageId: number){
    this.shared.getMessageContent(messageId).subscribe(x=>
      {
        alert(x)
        this.refreshMessageList()
      }
    );
  }

  deleteMessage(messageId: number): void{
    if(confirm('Are you sure??')){
      this.shared.deleteMessage(messageId).subscribe(data=>{
        alert(data.toString());
        this.refreshMessageList();
      });
    }
  }

  deleteSelected(): void{
    if(this.MessageIdsForActions.length==0)
    {
      confirm('There is no selected messages')
    }
    else
    {
      if(confirm('Do you want to delete '+this.MessageIdsForActions.length+' messages??')){
        this.shared.deleteMessages(this.MessageIdsForActions).subscribe(data=>{
          alert(data.toString());
          this.refreshMessageList();
        });
      }
    }
  }
}
