import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch, PasswordStrengthValidator } from '../home/password.validators';
import { UserService } from '../services/user.service';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  
  public resetForm :FormGroup;
  token:string;
  constructor(private activeRoute: ActivatedRoute,private router: Router,private fb: FormBuilder,private userService:UserService) {
    activeRoute.queryParams
      .subscribe((params) => 
        {
          this.token=params.token;
          console.log(this.token);
    });
  }

  ngOnInit(): void {
    this.resetForm=this.fb.group({
      password: ['', [Validators.required,Validators.minLength(10),PasswordStrengthValidator()]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: MustMatch("password", "confirmPassword")
    });
  }

  resetPassword(){
    var pass=this.resetForm.get('password').value;
    this.userService.resetPassword(this.token,pass).subscribe(
      res=>{
        alert("Password sucessfuly changed");
        this.router.navigate(['login']);

      }
    )
  }

}
