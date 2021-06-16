import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentDTO } from 'src/app/dto/getComment.model';
import { Post } from 'src/app/dto/post.model';
import { FeedService } from 'src/app/services/feed.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  liked: boolean = false;
  disliked: boolean = false;
  post: Post;
  comnum: number;
  isLoggedIn: boolean;
  ld:number[]=[];
  //dislikes: number = 0;
  text: string;
  comments: CommentDTO[] = [];
  username: string = "Ognjen";
  description: string = "Caoooooo";
  location: string = "Sremska Mitrovica"; 
  comment: Comment;
  showComments: boolean = false;
  constructor(private service: FeedService, private tokenService:TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getLikeDislike();
    this.getComments();
    this.isLoggedIn = this.tokenService.isLoggedIn();
  }

  like(){
    if(!this.isLoggedIn){
        alert("Please login first");
        return;
    }
    this.liked = true;
    this.disliked = false;
    this.service.like("1").subscribe(
      res=> {
        this.ld = res;
        console.log(this.ld[0]);
      }
    )
  }

  dislike(){
    this.disliked = true;
    this.liked = false;
    this.service.dislike("1").subscribe(
      res=> {
        this.ld = res;
        
      }
    )
  }

  show(){
    this.showComments = !this.showComments;
  }

  saveComment(){
    console.log(this.text);
    this.service.comment("1",this.text).subscribe(
      res=>{
        this.comnum = res;
        this.getComments();
      }
    )
    
  }

  getComments(){
    this.service.getComments("1").subscribe(
      res => {
        this.comments = res;
        this.comnum = this.comments.length;
      }
    )
  }

  getLikeDislike(){
    this.service.getLikeDislike("1").subscribe(
      res=> {
        this.ld = res;
      }
    )
  }

}
