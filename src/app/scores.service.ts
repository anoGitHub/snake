import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface HighScores {
  name: string,
  score: number,
}


@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(private _http: HttpClient) { }

  
  load(): Observable<HighScores[]>{
    const URL = 'http://scores.chrum.it/scores/snake';
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    const options = { headers }
    
    return this._http.get<HighScores[]>(URL, options);
  }

}
