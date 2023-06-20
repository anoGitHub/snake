import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private nameSource = new BehaviorSubject<string>('');
  UserName = this.nameSource.asObservable()

  public name: string = '';
  public token: string = '';
  constructor() { }

  changeName(UserName: string) {
    this.nameSource.next(UserName);
  }

  getTokenFromForm(data: User){
    this.token = data.token;
  }

  setToken() {
    return this.token;
  }

}