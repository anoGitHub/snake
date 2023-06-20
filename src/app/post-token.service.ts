import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

export interface HighScores {
  name: string,
  score: number,
  game: string,
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class PostTokenService {

  constructor(private _http: HttpClient) { }

  
  sendToken(token: string){
    const URL = 'http://scores.chrum.it/check-token';
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    const options = { headers }
    
    return this._http.post<{success: boolean}>(URL, {
      'auth-token': token
    }, options);
  }

  sendScores(token: string, name: string, score: number): Observable<HighScores[]> {
    const URL = 'http://scores.chrum.it/scores/';
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'auth-token': `${token}`
    })
    const options = { headers}
    
    const body = {
      name: `${name}`,
      game: 'snake',
      score: score,
    }

    return this._http.post<HighScores[]>(URL, body, options)
  } 
}
