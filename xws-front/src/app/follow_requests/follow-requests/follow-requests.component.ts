import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dto/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-follow-requests',
  templateUrl: './follow-requests.component.html',
  styleUrls: ['./follow-requests.component.css']
})
export class FollowRequestsComponent implements OnInit {

  constructor(private userService:UserService,) { }

  public users:String[]= new Array();

  ngOnInit(): void {
    this.getFollowRequests();
  }

  getFollowRequests(){

    this.userService.followRequests().subscribe(
      u=>{
        this.users=u;
        //this.image = this.sanitizer.bypassSecurityTrustStyle(this.user[0].mediaUrl[0]);
        console.log(this.users);
      },err=>{
        console.log(err.error);
      }
    )
  }

  accept(username:string){
    this.userService.accept(username).subscribe(
      res=>{
          alert("Follow request accepted");
          location.reload();
        }
    )
  }

  deny(username:string){
    this.userService.deny(username).subscribe(
      res=>{
          alert("Follow request denied");
          location.reload();
        }
    )
  }

}
