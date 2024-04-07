import { Injectable } from '@angular/core';
import { Pio } from '../../model/pio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajeServiceService {
  private options={
    headers:{
      'Content-Type':'application/json'
    }
  }

  constructor(private http:HttpClient) { }

  postMensaje(pio : Pio){
    return false;
  }

  getAll(){
    return this.http.get<Pio[]>('http://localhost:8080/api/mensajes/listar',this.options);
  }

  getAllByUsername(username: String){
    return this.http.get<Pio[]>(`http://localhost:8080/api/mensajes/byusuario/${username}`,this.options);
  }
}
