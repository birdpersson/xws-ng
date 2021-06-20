import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistrationDTO } from '../dto/userRegistrationDTO.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private readonly _APIUrl="http://localhost:8080/api/user/user"
  constructor(private _http: HttpClient) { }

  registration(user:UserRegistrationDTO):Observable<any>{
    return this._http.post(this._APIUrl+'/signup',user);

  }

  frogotPassword(value:string):Observable<any>{
    return this._http.post(this._APIUrl+'/forgot-password',{username:value});

  }
  
  resetPassword(token:string,password:string):Observable<any>{
    return this._http.post(this._APIUrl+'/reset-password',{token:token,password:password});

  }


  
}
