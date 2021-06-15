import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private readonly _APIUrl="http://localhost:8081/post/"
  constructor(private http: HttpClient) { }

  comment(id:string, text:string): Observable<any>{
    return this.http.post<any>(this._APIUrl + id+"/comment", text);
  }

  getComments(id:string): Observable<any>{
    return this.http.get<any>(this._APIUrl+"getComments/"+id);
  }
}
