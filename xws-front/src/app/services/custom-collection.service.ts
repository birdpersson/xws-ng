import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionPostDTO } from '../dto/collectionPostDTO.model';
import { CollectionDTO } from '../dto/custom-collection.model';

@Injectable({
  providedIn: 'root'
})
export class CustomCollectionService {

  private readonly postUrl="http://localhost:8081/post/";
  private readonly collectionUrl="http://localhost:8081/collection/";
  constructor(private http: HttpClient) { }

  getPosts():Observable<CollectionPostDTO[]>{
    return this.http.get<CollectionPostDTO[]>(this.collectionUrl + "getFavoritesForUser");
  }

  saveCollection(dto: CollectionDTO){
    return this.http.post(this.collectionUrl + "custom", dto, {responseType: "json"});
  }
  
}
