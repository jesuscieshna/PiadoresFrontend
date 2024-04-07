import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pio } from '../model/pio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PiadoresFrontend';
  pios: Pio[] = [{username:"Antoñito",text:"Hola buenassss",liked:false},{username:"Pepe",text:"illo",liked:false}];
}
