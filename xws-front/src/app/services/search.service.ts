import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly _APIUrl="http://localhost:8080/api/"
  constructor(private _http: HttpClient) { }

  searchUser(query:string):Observable<any>{
    return this._http.get(this._APIUrl+'/user/user/search/'+query);

  }

  searchLocation(query:string):Observable<any>{
    return this._http.get(this._APIUrl+'/post/post/search/location/'+query);

  }

  searchHashtags(query:string):Observable<any>{
    return this._http.get(this._APIUrl+'/post/post/search/hashtags/'+query);

  }
}
