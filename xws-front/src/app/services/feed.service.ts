import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private readonly _APIUrl="http://localhost:8080/post/"
  constructor(private http: HttpClient) { }

  comment(id:string, text:string): Observable<any>{
    return this.http.post<any>(this._APIUrl + id+"/comment", text);
  }

  getComments(id:string): Observable<any>{
    return this.http.get<any>(this._APIUrl+"getComments/"+id);
  }

  like(id:string):Observable<number[]>{
    return this.http.get<number[]>(this._APIUrl + id + "/like");
  }

  dislike(id:string):Observable<number[]>{
    return this.http.get<number[]>(this._APIUrl + id + "/dislike");
  }

  getLikeDislike(id:string):Observable<any>{
    return this.http.get(this._APIUrl + "getLikeDislike/" + id);
  }

  getPosts():Observable<any[]>{
    return this.http.get<any[]>(this._APIUrl + "/getFollowingPosts");
  }

  saveFavorite(id: string){
    return this.http.post(this._APIUrl + id + "/favorite",'');

  }

  removeFavorite(id:string){
    return this.http.post(this._APIUrl + id + "/unfavorite",'');
  }
}
