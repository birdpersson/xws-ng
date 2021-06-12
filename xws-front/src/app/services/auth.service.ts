import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCredentials } from '../dto/login-credentials.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private readonly _APIUrl="https://localhost:8080/auth"
  constructor(private _http: HttpClient) { }
  
  Login(credentials:LoginCredentials):Observable<any> {
    return this._http.post(this._APIUrl + '/login', credentials);
  }

  
}
