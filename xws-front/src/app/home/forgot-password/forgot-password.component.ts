import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public myForm :FormGroup;

  ngOnInit(): void {
    this.myForm=this.fb.group({
      email: ['', [Validators.email,Validators.required]]
    });
  }

  sendResetEmail(){}

}
