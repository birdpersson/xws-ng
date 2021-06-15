import { Component, OnInit } from '@angular/core';
import { CommentDTO } from 'src/app/dto/getComment.model';
import { Post } from 'src/app/dto/post.model';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  liked: boolean = false;
  post: Post;
  text: string;
  comments: CommentDTO[] = [];
  username: string = "Ognjen";
  description: string = "Caoooooo";
  location: string = "Sremska Mitrovica";
  comment: Comment;
  showComments: boolean = false;
  constructor(private service: FeedService) { }

  ngOnInit(): void {
    this.getComments()
  }

  like(){
    this.liked = !this.liked;
  }

  show(){
    this.showComments = !this.showComments;
  }

  saveComment(){
    console.log(this.text);
    this.service.comment("1",this.text).subscribe(
      res=>{
        this.getComments();
      }
    )
    
  }

  getComments(){
    this.service.getComments("1").subscribe(
      res => {
        this.comments = res
      }
    )
  }

}
