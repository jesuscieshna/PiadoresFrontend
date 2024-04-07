import { Injectable } from '@angular/core';
import { Pio } from '../../model/pio';

@Injectable({
  providedIn: 'root'
})
export class MensajeServiceService {

  constructor() { }

  postMensaje() : boolean{
    return false;
  }

  getAll() : Array<Pio>{
    return [];
  }

  getAllByUsername(username: String):Array<Pio>{
    return [];
  }
}
