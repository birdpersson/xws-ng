import { PostService } from './../services/post.service';
import { Post } from './../model/post.model';
import { Collection } from './../model/collection.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor(private postService:PostService) { }

  
  ngOnInit(): void {
    /*this.collection=new Collection();
    this.collection.collectionName="Ime";
    this.post.caption="hgeaklhgdag";
    this.post.id=1;
    this.post.username="marko";
    this.post.created=new Date();
    this.collection.posts.push(this.post);
    this.post.id=2;
    this.collection.posts.push(this.post);
    this.collections.push(this.collection);
    this.collection=new Collection();
    this.collection.collectionName="dva";
    this.post.id=3;
    this.collection.posts.push(this.post);
    this.collections.push(this.collection);*/
    this.likes.collectionName="Likes";
    this.dislikes.collectionName="Dislikes";
    this.favorites.collectionName="Favorites";
    this.stories.collectionName = "Stories";
    // this.collections.push(this.likes);
    // this.collections.push(this.dislikes);
    // this.collections.push(this.favorites);
    this.postService.getCollections().subscribe((data)=>{
      this.likes.posts=(data.likes);
      this.dislikes.posts=(data.dislikes);
      this.favorites.posts=(data.favorites);
      this.stories.posts = (data.stories);
      this.collections=(data.collections); 
      this.collections.push(this.likes);
      this.collections.push(this.dislikes);
      this.collections.push(this.favorites);
      this.collections.push(this.stories);}     

    );
  }
  likes:Collection=new Collection;
  dislikes:Collection=new Collection;
  favorites:Collection=new Collection;
  stories: Collection = new Collection;
  collections:Collection[]=[];
  post:Post=new Post();
  selected = new FormControl(0);


}
