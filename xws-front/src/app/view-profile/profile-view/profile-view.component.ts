import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/dto/post.model';
import { User } from 'src/app/dto/user.model';
import { PostService } from 'src/app/services/post.service';
import { ProfileViewService } from 'src/app/services/profile-view.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(private profileService:ProfileViewService, private postService:PostService) { }

  user:User;
  post:Post[]=[];

  ngOnInit(): void {
    var adresa = window.location.pathname;
    var splitted = adresa.split("/");
    splitted[2]
    console.log(splitted[2]);
    this.getProfileInfo(splitted[2]);
    this.getAllPosts(splitted[2]);
  }

  getProfileInfo(username:string){

    this.profileService.getProfileInfo(username).subscribe(
      u=>{
        this.user=u;
        console.log(this.user);
      },err=>{
        console.log(err.error);
      }
    )
  }

  getAllPosts(username:string){
    this.postService.getAllPosts(username).subscribe(
      p=>{
        this.post=p;
        console.log(this.post);
      },err=>{
        console.log(err.error);
      }
    )
  }

}
