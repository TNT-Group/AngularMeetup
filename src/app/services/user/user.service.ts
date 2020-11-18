import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get(environment.baseUrl + '/users').toPromise();
  }

  public addUser(user: User) {
    return this.http.post(environment.baseUrl + '/users', user);
  }
}
