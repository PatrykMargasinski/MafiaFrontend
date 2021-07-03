import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from '../shared/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  showMessages: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
