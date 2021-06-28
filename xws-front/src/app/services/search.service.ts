import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // private readonly _APIUrl="http://localhost:8080/api/";
  private readonly postUrl="http://localhost:8080/";
  private readonly userUrl="http://localhost:8080/";
  constructor(private _http: HttpClient) { }

  searchUser(query:string):Observable<any>{
    return this._http.get(this.userUrl+'user/search/'+query);

  }

  searchLocation(query:string):Observable<any>{
    return this._http.get(this.postUrl+'post/search/location/'+query);

  }

  searchHashtags(query:string):Observable<any>{
    return this._http.get(this.postUrl+'post/search/hashtags/'+query);

  }
}
