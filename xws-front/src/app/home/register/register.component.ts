import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/dto/user.model';
import { UserService } from 'src/app/services/user.service';
import { MustMatch ,PasswordStrengthValidator } from '../password.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm :FormGroup;
  user:User=new User;
  maxDate: Date;

  constructor(private fb: FormBuilder,private router: Router,private userService:UserService) {
    const currentYear = new Date().getFullYear(); 
    this.maxDate=new Date(currentYear-10,12,31);
  }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      email: ['', [Validators.email,Validators.required]],
      name:['',[Validators.required]],
      phoneNumber: [''],
      website:[''],
      birthday:[],
      password: ['', [Validators.required,Validators.minLength(10),PasswordStrengthValidator()]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: MustMatch("password", "confirmPassword")
    })
  }

  register(){
    this.user.username=this.registerForm.get('email').value;
    this.user.password=this.registerForm.get('password').value;
    this.userService.Register(this.user).subscribe(res => {
        alert("Thank you for registering. \n"+
        "In order to complete the registration, it is necessary to verify your account \n"+
        "A verification email has been sent to your email address  ");
        this.router.navigate(['/']);
      },
      err=>{
        alert("Registration failed ");
        
      }
    )
   
  }

}
