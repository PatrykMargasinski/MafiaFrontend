import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BossService } from 'src/app/shared/boss.service';
import { MessageService } from 'src/app/shared/message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor(private mesService: MessageService, private bossService: BossService) { }
  option: string
  @Output() swapEvent = new EventEmitter<number>();

  returnToMessageList()
  {
    this.swapEvent.emit();
  }

  sendMessage(form: NgForm)
  {
    let bossId:number;
    const isBossName = (this.option==="Boss name");
    this.bossService.getBossId(form.value.name, isBossName).subscribe(x=>
    {
      bossId=Number(x);
      const mes={
        ToBossId:bossId,
        FromBossId:sessionStorage.getItem("bossId"),
        Content:form.value.content
      }
      this.mesService.sendMessage(mes).subscribe(y=>{
        alert("Message sent");
        this.returnToMessageList();
      })
    }, err => {
      alert(err.error);
    });
  }

  ngOnInit(): void {
    this.option="Boss name"
  }

}
