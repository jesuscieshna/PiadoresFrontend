import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pio } from '../model/pio';
import { CommonModule } from '@angular/common';
import { PioComponent } from './messages/pio/pio.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Mensajero } from './service/mensaje-service.service';
import { Usuario } from '../model/usuario';
import { MatDialog } from '@angular/material/dialog';
import { NewPioDialog } from './messages/new-pio-dialog/new-pio-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PioComponent, MatIconModule, MatButtonModule, NewPioDialog],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'PiadoresFrontend';
  pios: Pio[] = [];

  username: string = "";
  email: string = "";
  message: string = "";

  constructor(private mensajero: Mensajero, public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.mensajero.getAll().subscribe((pio:Pio[])=>{
      this.pios=pio;
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

  postPio(username: string, email: string, message: string){
    var mensaje = new Pio(20,new Usuario(username,email),message,false);
    this.mensajero.postMensaje(mensaje).subscribe((response)=>{
      console.log(response);
    });
    this.pios.push(mensaje);
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewPioDialog, { width: '50%', data: { username: this.username, email: this.email, message: this.message } });
    dialogRef.afterClosed().subscribe(result => {
      this.postPio(result.username, result.email, result.message);
    });
  }
  
}
