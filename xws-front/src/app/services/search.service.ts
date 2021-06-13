import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly _APIUrl="https://localhost:9000"
  private readonly _APIUrl2="http://localhost:9001"
  constructor(private _http: HttpClient) { }

  searchUser(query:string):Observable<any>{
    return this._http.get(this._APIUrl+'/user/search/'+query);

  }

  searchLocation(query:string):Observable<any>{
    return this._http.get(this._APIUrl2+'/post/search/location/'+query);

  }

  searchHashtags(query:string):Observable<any>{
    return this._http.get(this._APIUrl2+'/post/search/hashtags/'+query);

  }
}
