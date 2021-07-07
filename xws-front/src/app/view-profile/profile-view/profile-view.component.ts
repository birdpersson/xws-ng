import { FriendSettingsDialogComponent } from './../../dialog/friend-settings-dialog/friend-settings-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { concat } from 'rxjs';
import { ChangeInfoComponent } from 'src/app/change-info/change-info/change-info.component';
import { ChangeInfo } from 'src/app/dto/change-info.model';
import { IsFollowing } from 'src/app/dto/isFollowing';
import { Post } from 'src/app/dto/post.model';
import { PostAll } from 'src/app/dto/postAll.model';
import { User } from 'src/app/dto/user.model';
import { ChangeInfoService } from 'src/app/services/change-info.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileViewService } from 'src/app/services/profile-view.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(public dialog: MatDialog ,private tokenStorageService: TokenStorageService,private profileService:ProfileViewService, private postService:PostService, private userService:UserService, private sanitizer : DomSanitizer, private changeInfoService:ChangeInfoService,private route: ActivatedRoute) { }

  public user:User;
  public post:PostAll[]= new Array();
  public image: any;
  public following: IsFollowing;
  public request: IsFollowing;
  public userInfo: string;
  public myPage: IsFollowing;
  public logged: Boolean;
  un:string;

  ngOnInit(): void {
    var adresa = window.location.pathname;
    var splitted = adresa.split("/");
    console.log(splitted[2]);
    this.route.params
      .subscribe(params => {
       this.un = params['username'];// you should have your id here.
       console.log(this.un);
      });  
    this.getProfileInfo(this.un);
    this.logged = this.tokenStorageService.isLoggedIn();
    console.log(this.logged);
    if(this.logged){
      this.getMyProfile(this.un);  
      this.getFollow(this.un);
      this.getFollowRequest(this.un);   
    }
     
  this.getAllPosts(this.un);
  }

  getProfileInfo(username:string){

    this.profileService.getProfileInfo(username).subscribe(
      u=>{
        this.user=u;
        //this.image = this.sanitizer.bypassSecurityTrustStyle(this.user[0].mediaUrl[0]);
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
        console.log(this.post[0].caption);
        console.log(this.post);
      },err=>{
        console.log(err.error);
      }
    )
  }

  checkPrivacy(){
    if(this.user.private){
      return true;
    }
    return false;
  }

  getFollow(username:string){
    this.userService.checkFollowing(username).subscribe(
      f=>{
        this.following=f;
        console.log(this.following);
        console.log("jej");
      },err=>{
        console.log(err.error);
      }
    )
  }

  hi(){
    console.log("hi"); 
  }

  getFollowRequest(username:string){
    this.userService.checkFollowRequest(username).subscribe(
      r=>{
        this.request=r;
        console.log(this.request);
      },err=>{
        console.log(err.error);
      }
    )
  }

  follow(username:string){
    this.userService.follow(username).subscribe(
      res=>{
        if(this.user.private){
          alert("Follow request sent");
          location.reload();
        }else{
          alert("You followed " + this.user.username);
          location.reload();
        }

      }
    )
  }

  checkHome(username:string){
    this.getInfo();
    if(this.userInfo == username){
      return true;
    }else{
      return false;
    }
  }

  getInfo(){
    this.changeInfoService.getUserInfo().subscribe(
      res => 
      {
        this.userInfo = res.username;
        console.log(this.userInfo);
        
        
      },
      err => {
        console.log(err);
        }
    );
  }

  getMyProfile(username:string){
    this.userService.myPage(username).subscribe(
      m=>{
        this.myPage=m;
        console.log(this.myPage);
      },err=>{
        console.log(err.error);
      }
    )
  }

  
  settings(username:string){
      const dialogRef = this.dialog.open(FriendSettingsDialogComponent, {
        data: {username:username }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        alert(result);
        this.ngOnInit();
      });
    }
    
}
