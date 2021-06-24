import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentDTO } from 'src/app/dto/getComment.model';
import { GetPostDTO } from 'src/app/dto/getPostDTO.model';
import { Post } from 'src/app/dto/post.model';
import { FeedService } from 'src/app/services/feed.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  text: string;
  comments: CommentDTO[] = [];
  username: string = "Ognjen";
  description: string = "Caoooooo";
  location: string = "Sremska Mitrovica"; 
  comment: Comment;
  constructor(private service: FeedService, private tokenService:TokenStorageService, private router: Router) { 
 
    
  }

  ngOnInit(): void {
    
    this.getPosts();
    //this.getLikeDislike();
    //this.getComments();
   // this.isLoggedIn = this.tokenService.isLoggedIn();
  }

  getPosts(){
    this.service.getPosts().subscribe(
      res => {
        this.getPost = res;
        console.log(this.getPost);
      }
    )
  }

}
