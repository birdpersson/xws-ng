import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { CommentDTO } from '../dto/getComment.model';
import { GetPostDTO } from '../dto/getPostDTO.model';
import { Post } from '../dto/post.model';
import { FeedService } from '../services/feed.service';
import { PostPageService } from '../services/post-page.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post: Post;
  comnum: number;
  liked:boolean;
  disliked:boolean;
  favorited: boolean;
  id: string;
  showComments: boolean;
  retrievedPost: GetPostDTO;
  images: string[];
  videos:string[];
  medias: Array<object>;
  ld:number[]=[];
  text: string;
  comments: CommentDTO[] = [];
  username: string = "Ognjen";
  description: string = "Caoooooo";
  location: string = "Sremska Mitrovica"; 
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  comment: Comment;
  isLoggedIn: boolean;
  constructor(private postService: PostPageService,private feedService: FeedService, private tokenService:TokenStorageService, private router: Router,private route: ActivatedRoute) { 
    
    
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
       this.id = params['id'];// you should have your id here.
       console.log(this.id);
      });
    this.getPost(this.id);
    this.getLikeDislike(this.id);
    this.getComments(this.id);
   this.isLoggedIn = this.tokenService.isLoggedIn();
  }

  like(postID){
    let pos;
    this.liked = true;
    this.disliked = false;
   
    this.feedService.like(postID).subscribe(
      res=> {
        this.ld = res;
        console.log(this.ld[0]);
      }
    )
  }

  dislike(postID){
    this.disliked = true;
    this.liked = false;
    this.feedService.dislike(postID).subscribe(
      res=> {
        this.ld = res;
        
      }
    )
  }

  favorite(id){
    this.favorited = !this.favorited;
    this.feedService.saveFavorite(id).subscribe(
      res=>{

      }
    )
  }

  unfavorite(id){
    this.favorited = !this.favorited;
    this.feedService.removeFavorite(id).subscribe(
      res=>{
        
      }
    )
  }

  show(){
    this.showComments = !this.showComments;
  }

  saveComment(postID){
    console.log(this.text);
    this.feedService.comment(postID,this.text).subscribe(
      res=>{
        this.comnum = res;
        this.getComments(postID);
      }
    )
    
  }

  getComments(postID){
    this.feedService.getComments(postID).subscribe(
      res => {
        this.comments = res;
        this.comnum = this.comments.length;
      }
    )
  }

  getLikeDislike(id){
    this.feedService.getLikeDislike(id).subscribe(
      res=> {
        this.ld = res;
      }
    )
  }

  getPost(id){
    this.postService.getPost(id).subscribe(
      res => {
        this.retrievedPost = res;
        this.images = this.getImages();
        console.log(this.images);
        this.videos = this.getVideos();
        console.log(this.videos);
        
      }
    )
  }


  getVideos() {
    var videos = []
    for(var media of this.retrievedPost.mediaUrls){
      if(media.endsWith(".mp4") || media.endsWith(".mkv"))
        videos.push(media);
    }
    return videos;
  }

  getImages() {
    var images = []
    for(var media of this.retrievedPost.mediaUrls){
      if(media.endsWith(".jpg") || media.endsWith(".png"))
        images.push(media)
    }
    return images;
  }
}
