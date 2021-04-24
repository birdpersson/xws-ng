import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { LoginCredentials } from '../../dto/login-credentials.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm :FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,private authenticationService:AuthService, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required ]]
    })

  }

  //,Validators.email
  login(){
    var  credentials= new LoginCredentials();
    credentials.username=this.loginForm.controls['email'].value;
    credentials.password= this.loginForm.controls['password'].value;

    this.authenticationService.Login(credentials).subscribe(
    (data:any)=>
      {
        this.tokenStorage.saveToken(data.accessToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        alert("Uspeh");
        this.router.navigate(['/'])
      },
      err => {
        this.errorMessage = "";
        this.isLoginFailed = true;
      }  
    )
  }

}
