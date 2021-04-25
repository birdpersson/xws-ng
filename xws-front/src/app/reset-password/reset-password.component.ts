import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MustMatch, PasswordStrengthValidator } from '../home/password.validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  
  public resetForm :FormGroup;

  constructor(private activeRoute: ActivatedRoute,private fb: FormBuilder) {
    activeRoute.queryParams
      .subscribe((params) => 
        {
          console.log(params)
    });
  }

  ngOnInit(): void {
    this.resetForm=this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(10),PasswordStrengthValidator()]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: MustMatch("password", "confirmPassword")
    })
  }

  resetPassword(){}

}
