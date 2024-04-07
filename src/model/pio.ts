export class Pio
{
  public username: String;
  public text: String;
  public liked: boolean;

  constructor(username :String, text: String, liked: boolean){
    this.username=username;
    this.text=text;
    this.liked=liked;
  }
}
