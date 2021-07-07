import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string;
  constructor(private tokenStorageService: TokenStorageService,private router: Router, private userService: UserService) { }

  ngOnInit(): void {
   this.getLoggedUser();
  }

  logOut(){
    this.tokenStorageService.logout().subscribe(res=>
      {
        this.router.navigate(['login']);
      }
    );
  }
   
  follow(){
    this.router.navigate(['follow_requests']);
      
  }

  getLoggedUser(){
    this.userService.getLoggedUser().subscribe(
      res=>{
        this.username = res.username;
        console.log(this.username);
      }
    )
  }
  
}
