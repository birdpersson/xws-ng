import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../dto/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly mediaUrl = 'http://localhost:8080/media';
  private readonly postUrl = 'http://localhost:8080/post';
  private readonly userUrl = 'http://localhost:8080/auth';
  constructor(private _http: HttpClient) { }


  upload(file:File){
    const formData: FormData = new FormData();

    formData.append('files', file);

    return this._http.post(this.mediaUrl + "/upload-files", formData, {responseType:"text"});
  }

  getFriends():Observable<string[]>{
    return this._http.get<string[]>(this.userUrl + "/getFriends")
  }

  createPost(post: Post){
    return this._http.post(this.postUrl + "/createPost", post, {responseType: "json"})
  }
  
  getCollections():Observable<any>{
    return this._http.get(this.postUrl+'/collections');
  }

  getAllPosts(username:string):Observable<any>{
    return this._http.get(this.postUrl + "/" + username);
  }
	getAllByLocation(location:string):Observable<any>{
    return this._http.get(this.postUrl+'/all/location/'+location);
	}

  getAllByyHashtah(hashtag:string):Observable<any>{
    return this._http.get(this.postUrl+'/all/hashtags/'+hashtag);
	}

  getFiles(): Observable<any> {
    return this._http.get(this.mediaUrl + '/postFiles');
  }

}
