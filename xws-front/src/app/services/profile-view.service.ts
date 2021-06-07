import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileViewService {

  private readonly _APIUrl="http://localhost:8080"
  constructor(private _http: HttpClient) { }

  getProfileInfo(username:string):Observable<any>{
    return this._http.get(this._APIUrl+'/user/profile-view/'+username);
  }

}
