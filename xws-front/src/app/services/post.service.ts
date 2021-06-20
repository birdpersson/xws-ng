import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../dto/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly mediaUrl = 'http://localhost:8080/api/media/media';
  private readonly postUrl = 'http://localhost:8080/api/post/post';
  private readonly userUrl = 'http://localhost:8080/api/user/auth';
  constructor(private _http: HttpClient) { }


  upload(file:File){
    const formData: FormData = new FormData();

    formData.append('media', file);

    return this._http.post(this.mediaUrl + "/upload", formData, {responseType:"text"});
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

	getAllByLocation(location:string):Observable<any>{
    return this._http.get(this.postUrl+'/all/location/'+location);
	}

  getAllByyHashtah(hashtag:string):Observable<any>{
    return this._http.get(this.postUrl+'/all/hashtags/'+hashtag);
	}


}
