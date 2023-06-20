import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HighScores, ScoresService } from '../scores.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent implements OnInit {

  columns = ["Name", "Score"];
  indexs = ["name", "score"];
  public filter: string = "";
  public data: Array<HighScores> = [];
  constructor(
    private _scores: ScoresService,
    private _router: Router,) {

    this._scores.load().subscribe((result => {
      this.data = (result);
    }));
   }
  
  public goBack() {
    this._router.navigate(['/game', 'normalColor'])
   }

  ngOnInit(): void {
  }

}
