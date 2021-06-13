import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistrationDTO } from '../dto/userRegistrationDTO.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private readonly _APIUrl="https://localhost:9000"
  constructor(private _http: HttpClient) { }

  registration(user:UserRegistrationDTO):Observable<any>{
    return this._http.post(this._APIUrl+'/auth/signup',user);

  }

  frogotPassword(value:string):Observable<any>{
    return this._http.post(this._APIUrl+'/forgot-password',{username:value});

  }
  
  resetPassword(token:string,password:string):Observable<any>{
    return this._http.post(this._APIUrl+'/reset-password',{token:token,password:password});

  }
  
}
