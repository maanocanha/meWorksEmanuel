import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private _http: HttpClient) { }

  
    create(author: Login):Observable<Login> {
      return this._http.post<Login>('http://localhost:3000/logins', Login);
    }

  }