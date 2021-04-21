import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from '../dto/login-credentials.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm :FormGroup;

  constructor(private fb: FormBuilder,private authenticationService:AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required ]]
    })
  }

  //,Validators.email
  Login(){
    var  credentials= new LoginCredentials();
    credentials.username=this.loginForm.controls['email'].value;
    credentials.password= this.loginForm.controls['password'].value;

    this.authenticationService.Login(credentials).subscribe(
    (data:any)=>
      {
        localStorage.setItem('accessToken', data.accessToken);
        alert("Uspeh");
        this.router.navigate(['/'])
      },
      err => {
        alert(err.error);
      }  
    )
  }

}
