import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly _APIUrl="http://localhost:8080/api/post/post/"
  constructor(private _http: HttpClient) { }

  
  getCollections():Observable<any>{
    return this._http.get(this._APIUrl+'collections');
  }

	getAllByLocation(location:string):Observable<any>{
    return this._http.get(this._APIUrl+'all/location/'+location);
	}

  getAllByyHashtah(hashtag:string):Observable<any>{
    return this._http.get(this._APIUrl+'all/hashtags/'+hashtag);
	}

	

}
