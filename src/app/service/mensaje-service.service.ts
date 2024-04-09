import { Injectable } from '@angular/core';
import { Pio } from '../../model/pio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mensajero {
  private options={
    headers:{
      'Content-Type':'application/json'
    }
  }

  constructor(private http:HttpClient) { }

  updateMensajeLike(pio: Pio){
    return this.http.put('http://localhost:8080/api/mensajes/likechange', pio, this.options);
  }

  postMensaje(pio : Pio){
    return this.http.post('http://localhost:8080/api/mensajes/nuevo', pio, this.options);
  }

  getAll(){
    return this.http.get<Pio[]>('http://localhost:8080/api/mensajes/todos',this.options);
  }

  getAllByUsername(username: String){
    return this.http.get<Pio[]>(`http://localhost:8080/api/mensajes/byusuario/${username}`,this.options);
  }


}
