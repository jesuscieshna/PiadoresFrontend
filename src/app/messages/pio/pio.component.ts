import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pio } from '../../../model/pio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pio-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pio.component.html',
  styleUrl: './pio.component.css'
})
export class PioComponent {
  @Input()
  item!: Pio;

  @Output() dataEvent = new EventEmitter<string>();

  sendDataToParent(userName:string) {
    this.dataEvent.emit(userName);
  }

  likeButton() {
    this.item.likes=!this.item.likes;
  }

}
