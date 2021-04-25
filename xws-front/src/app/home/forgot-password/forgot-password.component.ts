import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router) { }

  public myForm :FormGroup;

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email: ['', [Validators.email,Validators.required]]
    });
  }

  sendResetEmail(){
    alert("Link for password reset was sent to "+this.myForm.get('email').value);
    this.router.navigate(['login']);
  }

}
