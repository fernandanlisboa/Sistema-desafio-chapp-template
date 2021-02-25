import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from '../models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/admins/login', user)
  }

  public sign(user): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/admins', user)
  }

  //ainda precisa ser testado
  public signOut(): Observable<any> {
    localStorage.removeItem('token');
    return this.http.post<any>('http://localhost:3000/api/admins/logout', null, httpOptions)
  }

  //parte do template
  public getUser(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Smith'
    });
  }
}
