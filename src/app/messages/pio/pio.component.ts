import { Component, Input } from '@angular/core';
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
  isLiked = false;

  likeButton() {
    this.isLiked = !this.isLiked;
  }

}
