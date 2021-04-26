import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dto/user.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private readonly _APIUrl="http://localhost:8080/auth"
  constructor(private _http: HttpClient) { }

  Register(user:User):Observable<any>{
    return this._http.post(this._APIUrl+'/signup',user);

  }

  frogotPassword(value:string):Observable<any>{
    return this._http.post(this._APIUrl+'/forgot-password',{username:value});

  }
  
  resetPassword(user:User):Observable<any>{
    return this._http.post(this._APIUrl+'/signup',user);

  }
  
}
