import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeInfo } from 'src/app/dto/change-info.model';
import { ChangeInfoService } from 'src/app/services/change-info.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {

  
  infoForm: FormGroup;
  changeInfo: ChangeInfo;
  datePipe: DatePipe = new DatePipe("en-US");
  name:string;
  constructor(private fb: FormBuilder, private service: ChangeInfoService) { }

  ngOnInit(): void {
    this.getInfo();
  // console.log(this.changeInfo);
    

  }

  getInfo(){
    this.service.getUserInfo().subscribe(
      res => 
      {
        this.changeInfo = res;
        console.log(this.changeInfo);
        this.infoForm=this.fb.group({
          name: [this.changeInfo.name, [Validators.required]],
          username: [this.changeInfo.username, [Validators.required]],
          email: [this.changeInfo.email, [Validators.email]],
          website: [this.changeInfo.website, []],
          phone: [this.changeInfo.phone, [Validators.pattern("[0-9]{9,10}")]],
          picker: [new Date(this.changeInfo.date)],
          gender: [this.changeInfo.gender.toLowerCase()],
          bio: [this.changeInfo.bio, []]
        })
        console.log(this.infoForm.value.picker);
      },
      err => {
        console.log(err);
        }
    );
  }

  submit(){
    this.changeInfo.name = this.infoForm.value.name;
    this.changeInfo.username = this.infoForm.value.username;
    this.changeInfo.email = this.infoForm.value.email;
    this.changeInfo.website = this.infoForm.value.website;
    this.changeInfo.date = this.infoForm.value.picker;
    this.changeInfo.bio = this.infoForm.value.bio;
    this.changeInfo.gender = this.infoForm.value.gender;
    this.changeInfo.phone = this.infoForm.value.phone;
    
    console.log(this.changeInfo.gender);
    
    this.service.changeInfo(this.changeInfo).subscribe(
      res=>{
          this.logout();
      },
      err =>{
          alert("Username already exists");
      }
    );
  }

  logout(){
    this.service.logout();
  }

  


}
