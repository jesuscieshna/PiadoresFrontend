import { Usuario } from "./usuario";

export class Pio
{
  public id: number
  public usuario: Usuario;
  public campo: String;
  public likes: boolean;

  constructor(id :number, usuario :Usuario, campo: String, likes: boolean){
    this.id=id;
    this.usuario=usuario;
    this.campo=campo;
    this.likes=likes;
  }
}
