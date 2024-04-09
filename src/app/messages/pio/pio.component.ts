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

  @Output() userNameEmit = new EventEmitter<string>();
  @Output() likedMessageEmitter = new EventEmitter<Pio>();

  userNameClicked(userName:string) {
    this.userNameEmit.emit(userName);
  }

  messageLikeClicked(message: Pio){
    this.item.likes=!this.item.likes;
    console.log(this.item.likes);
    this.likedMessageEmitter.emit(this.item);
  }

}
