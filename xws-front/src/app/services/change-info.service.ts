import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChangeInfo } from '../dto/change-info.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeInfoService {

  private readonly _APIUrl="http://localhost:8080/api/user/auth";
  constructor(private http: HttpClient, private router: Router) { }

  getUserInfo(): Observable<ChangeInfo>{
    return this.http.get<ChangeInfo>(this._APIUrl + "/userInfo");
  }

  changeInfo(ci: ChangeInfo){
    return this.http.post(this._APIUrl + "/changeInfo", ci, {responseType:"text"});
  }

  
  logout(){
    localStorage.removeItem('user');
    
    this.router.navigate(['/login']);
  }
}
