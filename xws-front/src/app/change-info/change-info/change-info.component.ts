import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  infoForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.infoForm=this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.email]],
      website: ['', []],
      phone: ['', [Validators.pattern("[0-9]{9,10}")]],
      bio: ['', []]
    })
  }

}
