import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dto/user.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private readonly _APIUrl="http://localhost:8080/auth"
  private readonly _APIUrl1="http://localhost:8080/follow"
  private readonly _APIUrl2="http://localhost:8080/user"
  constructor(private _http: HttpClient) { }

  Register(user:User):Observable<any>{
    return this._http.post(this._APIUrl+'/signup',user);

  }

  frogotPassword(value:string):Observable<any>{
    return this._http.post(this._APIUrl+'/forgot-password',{username:value});

  }
  
  resetPassword(token:string,password:string):Observable<any>{
    return this._http.post(this._APIUrl+'/reset-password',{token:token,password:password});

  }

  checkFollowing(username:string):Observable<any>{
    return this._http.get(this._APIUrl1+"/profile-view/" + username);
  }

  checkFollowRequest(username:string):Observable<any>{
    return this._http.get(this._APIUrl1+"/follow-request/" + username);
  }

  follow(username:string):Observable<any>{
    return this._http.get(this._APIUrl1+"/follow/" + username);
  }

  followRequests():Observable<any>{
    return this._http.get(this._APIUrl2+"/follow-requests");
  }

  accept(username:string):Observable<any>{
    return this._http.post(this._APIUrl1+"/accept/" + username, username);
  }

  deny(username:string):Observable<any>{
    return this._http.post(this._APIUrl1+"/deny/" + username, username);
  }

  myPage(username:string):Observable<any>{
    return this._http.get(this._APIUrl2+"/my-profile/" + username);
  }
  
}
