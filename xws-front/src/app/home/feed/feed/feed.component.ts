import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentDTO } from 'src/app/dto/getComment.model';
import { GetPostDTO } from 'src/app/dto/getPostDTO.model';
import { Post } from 'src/app/dto/post.model';
import { FeedService } from 'src/app/services/feed.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  post: Post;
  comnum: number;
  getPost: GetPostDTO[] = [];
  ld:number[]=[];
  posts:any[];
  text: string;
  comments: CommentDTO[] = [];
  username: string;
  description: string = "Caoooooo";
  location: string = "Sremska Mitrovica"; 
  comment: Comment;
  constructor(private service: FeedService, private tokenService:TokenStorageService, private router: Router, private userService: UserService) { 
 
    
  }

  ngOnInit(): void {
    this.getLoggedUser();
    this.getPosts();
    // this.posts = this.getPost.map(item=>({
    //   ...item,
    //   ...item.mediaUrls.map(url=>{
        
    //       image:url
        
    //   })
    // }))
    
    // this.posts = this.arrayToObject(this.getPost);
    // console.log(this.posts);
    // this.getPost.forEach(post=>{
    //   post.mediaUrls.forEach(url=> {
    //     url = { "image": url}
    //   })
    // })

    //this.getLikeDislike();
    //this.getComments();
   // this.isLoggedIn = this.tokenService.isLoggedIn();
  }

  getPosts(){
    this.service.getPosts().subscribe(
      res => {
        this.getPost = res;
        //  console.log(this.getPost);
  
        console.log(this.posts);
      }
    )
  }

  getLoggedUser(){
    this.userService.getLoggedUser().subscribe(
      res=>{
        this.username = res;
        console.log(this.username);
      }
    )
  }
  

}
