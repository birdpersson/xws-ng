import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
