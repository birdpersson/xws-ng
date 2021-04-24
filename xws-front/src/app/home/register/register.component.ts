import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch ,PasswordStrengthValidator } from '../password.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm :FormGroup;

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(10),PasswordStrengthValidator()]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: MustMatch("password", "confirmPassword")
    }
    )
  }

  register(){
    this.router.navigate(['/'])
  }

}
