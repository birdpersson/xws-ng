import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private postService:PostService,private route: ActivatedRoute) { }

  type:string="";
  result:string="";
  posts:Post[]=[];
  ngOnInit(): void {
    this.type=this.route.snapshot.paramMap.get('type');
    this.result=this.route.snapshot.paramMap.get('result');
    if(this.type==="tags")
      this.getAllPostsByTag();
    else if(this.type==="locations")
      this.getAllPostsByLocation();
  }

  getAllPostsByTag(){
    this.postService.getAllByyHashtah(this.result).subscribe(
      (data)=>{
        this.posts=data;
      }
    )
  }
  getAllPostsByLocation(){
    this.postService.getAllByLocation(this.result).subscribe(
      (data)=>{
        this.posts=data;
      }
    )
  }
}
