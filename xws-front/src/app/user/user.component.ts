import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.tokenStorageService.logout().subscribe(res=>
      {
        this.router.navigate(['login']);
      }
    );
  }
}
