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

  @Output() swapEvent = new EventEmitter<number>();

  return()
  {
    this.swapEvent.emit();
  }

  sendMessage(form: NgForm)
  {
    let bossId:number;
    this.bossService.getBossIdByName(form.value.name.replace(' ','')).subscribe(x=>
    {
      bossId=Number(x);
      if(bossId===undefined)
      {
        alert("Boss not found"); return;
      }
      const mes={
        ToBossId:bossId,
        FromBossId:sessionStorage.getItem("bossId"),
        Content:form.value.content
      }
      this.mesService.sendMessage(mes).subscribe(y=>{
        alert("Message sent");
        this.return();
      })
    }, err => {
      alert("Something went wrong...");
    });
  }

  ngOnInit(): void {
  }

}
