import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly _APIUrl="http://localhost:8080/post/"
  constructor(private _http: HttpClient) { }

  
 /* getLikedPosts(username:string):Observable<any>{
    return this._http.get(this._APIUrl+username+'/likes/');
  }*/

	getAllByLocation(location:string):Observable<any>{
    return this._http.get(this._APIUrl+'all/location/'+location);
	}

  getAllByyHashtah(hashtag:string):Observable<any>{
    return this._http.get(this._APIUrl+'all/hashtags/'+hashtag);
	}

	

}
