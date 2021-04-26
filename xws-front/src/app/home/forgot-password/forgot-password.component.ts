import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router,private userService:UserService) { }

  public myForm :FormGroup;

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email: ['', [Validators.email,Validators.required]]
    });
  }

  sendResetEmail(){
    this.userService.frogotPassword(this.myForm.get('email').value).subscribe(res=>{
      alert("Link for password reset was sent to "+this.myForm.get('email').value);
      this.router.navigate(['login']);
    },
    err=>{
      alert("An error has occurred");
    }
    );

    
  }

}
