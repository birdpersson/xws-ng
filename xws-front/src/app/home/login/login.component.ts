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
  errorMessage = '';
  isLoginFailed=false;

  constructor(private fb: FormBuilder,private authenticationService:AuthService, private tokenStorageService: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', [Validators.required]],//,Validators.email
      password: ['', [Validators.required ]]
    })
    this.isLoginFailed=false;
  }

  //,Validators.email
  login(){
    var  credentials= new LoginCredentials();
    credentials.username=this.loginForm.controls['email'].value;
    credentials.password= this.loginForm.controls['password'].value;

    this.authenticationService.Login(credentials).subscribe(
    (data:any)=>
      {
        this.tokenStorageService.login(data.accessToken)
            .subscribe(res => {
                    if (res.success) 
                    {
                        console.log(data.ac);
                        this.goToDashBoard();
                      }
              });
      },
      err => {
        this.errorMessage = "";
        this.isLoginFailed=true;
      }  
    )
    
  }

  goToDashBoard(){
    let role = this.tokenStorageService.getRole();
    if (role === 'ADMIN')
      this.router.navigate(['admin']);
    if (role === 'USER')
      this.router.navigate(['user']);

  } 

}

