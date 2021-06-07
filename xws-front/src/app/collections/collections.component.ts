import { Post } from './../model/post.model';
import { Collection } from './../model/collection.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.collection=new Collection();
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
    this.collections.push(this.collection);
  }
  collection:Collection;
  collections:Collection[]=[]
  post:Post=new Post();
  selected = new FormControl(0);


}
