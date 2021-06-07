import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeInfo } from '../dto/change-info.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeInfoService {

  private readonly _APIUrl="http://localhost:8080/auth";
  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<ChangeInfo>{
    return this.http.get<ChangeInfo>(this._APIUrl + "/userInfo");
  }

  changeInfo(ci: ChangeInfo){
    return this.http.post(this._APIUrl + "/changeInfo", ci, {responseType:"text"});
  }
}
