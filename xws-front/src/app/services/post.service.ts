import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../dto/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private mediaUrl = 'http://localhost:8080/media';
  private postUrl = 'http://localhost:8080/post';
  private userUrl = 'http://localhost:8080/auth';
  constructor(private http: HttpClient) { }

  upload(file:File){
    const formData: FormData = new FormData();

    formData.append('media', file);

    return this.http.post(this.mediaUrl + "/upload", formData, {responseType:"text"});
  }

  getFriends():Observable<string[]>{
    return this.http.get<string[]>(this.userUrl + "/getFriends")
  }

  createPost(post: Post){
    return this.http.post(this.postUrl + "/createPost", post, {responseType: "json"})
  }

  getAllPosts(username:string):Observable<any>{
    return this.http.get(this.postUrl + "/" + username);
  }

}
