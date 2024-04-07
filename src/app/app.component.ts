import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pio } from '../model/pio';
import { CommonModule } from '@angular/common';
import { PioComponent } from './messages/pio/pio.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MensajeServiceService } from './service/mensaje-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PioComponent, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'PiadoresFrontend';
  pios: Pio[] = [];

  constructor(private mensajesService: MensajeServiceService) {  }

  filterByUsername(username: string) {
    this.mensajesService.getAllByUsername(username).subscribe((pio:Pio[])=>{
      this.pios=pio;
      console.log(pio);
    })
  }

  ngOnInit(): void {
    this.mensajesService.getAll().subscribe((pio:Pio[])=>{
      this.pios=pio;
      console.log(pio);
    })
  }
}
