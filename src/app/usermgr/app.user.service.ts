import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {

  private usersUrl = 'app/users';

  private headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(private http: Http) {
      console.log('User service is inililized');
   }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError)

  }

  getUser(userId: Number): Observable<User> {
    const url = `${this.usersUrl}/${userId}`;
    return this.http
          .get(url)
          .map(response => response.json().data as User);
  }

  addUser(user: User) {
    return this.http
      .post(this.usersUrl, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);

  }

  updateUser(user: User): Observable<User>{
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put(url, {headers : this.headers})
            .map(response => response.json().data as User);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }

}