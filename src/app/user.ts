export class User {

  public userName: string;
  public token: string;
  public color: string;
  public score: number;

  constructor(userName: string, token: string, selectedColor: string, score: number){
      this.userName = userName;
      this.token = token;
      this.color = selectedColor;
      this.score = score;
  }
}
