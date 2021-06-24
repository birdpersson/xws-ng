import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationDTO } from 'src/app/dto/userRegistrationDTO.model';
import { UserService } from 'src/app/services/user.service';
import { MustMatch ,PasswordStrengthValidator } from '../password.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm :FormGroup;
  user:UserRegistrationDTO;
  maxDate: Date;

  constructor(private fb: FormBuilder,private router: Router,private userService:UserService) {
    const currentYear = new Date().getFullYear(); 
    this.maxDate=new Date(currentYear-10,12,31);
  }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      username:['',Validators.required],
      email: ['', [Validators.email,Validators.required]],
      name:['',[Validators.required]],
      phoneNumber: [''],
      website:[''],
      birthday:[],
      bio:[''],
      gender:[,[Validators.required]],
      password: ['', [Validators.required,Validators.minLength(10),PasswordStrengthValidator()]],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: MustMatch("password", "confirmPassword")
    })
  }

  register(){
    this.user=new UserRegistrationDTO();
    this.user.username=this.registerForm.controls['username'].value;
    this.user.password=this.registerForm.controls['password'].value;
    this.user.email=this.registerForm.controls['email'].value;
    this.user.name=this.registerForm.controls['name'].value;
    this.user.phone=this.registerForm.controls['phoneNumber'].value;
    this.user.website=this.registerForm.controls['website'].value;
    this.user.birthday=this.registerForm.controls['birthday'].value;
    this.user.gender=this.registerForm.controls['gender'].value;
    this.user.bio=this.registerForm.controls['bio'].value;
    console.log(this.user.gender);
    this.userService.registration(this.user).subscribe(
      res => {
        alert("Thank you for registering. ");/*"In order to complete the registration, it is necessary to verify your account \n"+
        "A verification email has been sent to your email address  "*/
        this.router.navigate(['/']);
        },
    (err)=>{
        alert("An error has occurred" );
        
      }
    )
   
  }

}
