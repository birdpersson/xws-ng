import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dto/user.model';
import { ProfileViewService } from 'src/app/services/profile-view.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(private profileService:ProfileViewService) { }

  user:User;

  ngOnInit(): void {
    var adresa = window.location.pathname;
    var splitted = adresa.split("/");
    splitted[2]
    console.log(splitted[2]);
    this.getProfileInfo(splitted[2]);
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

}
