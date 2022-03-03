import { Component, Input, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'png-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  @Input() position!: string;
  @Input() msg!: Message;
  @Input() key!: string;
  constructor(private messageService: MessageService) {}
  showConfirm() {
    this.messageService.clear(this.key);
    this.messageService.add(this.msg);
  }
  onConfirm() {
    this.messageService.clear(this.key);
  }

  onReject() {
    this.messageService.clear(this.key);
  }
}
