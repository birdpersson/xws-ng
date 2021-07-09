import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post.model';
import { UserService } from '../services/user.service';
import { User } from '../dto/user.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private postService:PostService,private route: ActivatedRoute,private userService: UserService) { }

  type:string="";
  result:string="";
  posts:Post[]=[];
  tempPosts:Post[]=[];
  user:User=new User();
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
        this.tempPosts=data;
        this.getFullLogeedUser();
      }
    )
  }
  getAllPostsByLocation(){
    this.postService.getAllByLocation(this.result).subscribe(
      (data)=>{
        this.tempPosts=data;
        this.getFullLogeedUser();
      }
    )
  }

  getFullLogeedUser(){
    this.userService.getFullLoggedUser().subscribe(
      res=>{
        this.user=res;
        this.postsFilter();
       
      }
    )
  }
  postsFilter(){
    this.tempPosts.forEach(
      (post)=>{
        var blockedUser=false;
        this.user.blocked.forEach(
          blocked=>{
            if(blocked.username===post.username){
                  blockedUser=true;  
                }
              }
            );
          
        if(!blockedUser&&(!this.user.private))
          this.posts.push(post);
        });
   
  }
  
}
