import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPostDTO } from '../dto/getPostDTO.model';

@Injectable({
  providedIn: 'root'
})
export class PostPageService {

  private readonly _APIUrl="http://localhost:8080/post/";
  constructor(private http: HttpClient) { }

  getPost(id:string):Observable<GetPostDTO>{
    return this.http.get<GetPostDTO>(this._APIUrl + "getPostById/" +id);
  }
}
