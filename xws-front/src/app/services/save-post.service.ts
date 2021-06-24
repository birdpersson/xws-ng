import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../dto/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private mediaUrl = 'http://localhost:8082/media';
  private postUrl = 'http://localhost:8081/post';
  private fileUrl = 'http://localhost:8081/file';
  private userUrl = 'http://localhost:8080/auth';
  constructor(private http: HttpClient) { }

  upload(file:File){
    const formData: FormData = new FormData();

    formData.append('files', file);

    return this.http.post(this.mediaUrl + "/upload-files", formData, {responseType:"text"});
  }

  getFriends():Observable<string[]>{
    return this.http.get<string[]>(this.userUrl + "/getFriends")
  }

  createPost(post: Post){
    return this.http.post(this.postUrl + "/createPost", post, {responseType: "json"})
  }

  getFiles(): Observable<any>{
    return this.http.get(this.fileUrl + "/files");

  }
  
}