import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { BossService } from 'src/app/shared/boss.service';
import { MessageService } from 'src/app/shared/message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor(private mesService: MessageService, private bossService: BossService) { }
  @Output() swapEvent = new EventEmitter<number>();

  similarBossNames: string[]

  findSimilarBossNames(text: string)
  {
    if(text.length>=3)
    {
      this.bossService.findBossNamesStartingWith(text).subscribe(x=>{this.similarBossNames=x;console.log(this.similarBossNames);})
    }
    else
      this.similarBossNames=[]
  }

  returnToMessageList()
  {
    this.swapEvent.emit();
  }

  sendMessage(form: NgForm)
  {
    let bossId:number;
    this.bossService.getBossIdByName(form.value.name).subscribe(x=>
    {
      bossId=Number(x);
      const mes={
        ToBossId: bossId,
        FromBossId: sessionStorage.getItem("bossId"),
        Content: form.value.content,
        Subject: form.value.subject
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
  }

}
