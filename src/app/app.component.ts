import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pio } from '../model/pio';
import { CommonModule } from '@angular/common';
import { PioComponent } from './messages/pio/pio.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Mensajero } from './service/mensaje-service.service';
import { Usuario } from '../model/usuario';

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

  constructor(private mensajero: Mensajero) {  }

  ngOnInit(): void {
    this.mensajero.getAll().subscribe((pio:Pio[])=>{
      this.pios=pio;
      console.log(pio);
    })
  }

  filterByUsername(username: string) {
    this.mensajero.getAllByUsername(username).subscribe((pio:Pio[])=>{
      this.pios=pio;
      console.log(pio);
    })
  }

  likeMessage(mensaje: Pio) {
    this.mensajero.updateMensajeLike(mensaje).subscribe(()=>{
    });
  }


























  postPio(){
    var mensaje = new Pio(20,new Usuario("paquito","email"),"hola buenas",false);
    mensaje.campo="hola buenas";
    mensaje.likes=false;
    mensaje.usuario=new Usuario("paquito","email");
    this.mensajero.postMensaje(mensaje).subscribe((response)=>{
      console.log(response);
    });
  }
}
