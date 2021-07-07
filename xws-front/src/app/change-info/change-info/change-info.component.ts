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
  changeInfo: ChangeInfo=new ChangeInfo("","","","","",new Date(),"","",false,true,true);
  datePipe: DatePipe = new DatePipe("en-US");
  name:string;
  constructor(private fb: FormBuilder, private service: ChangeInfoService) { }

  ngOnInit(): void {
    this.getInfo();
  // console.log(this.changeInfo);
    this.infoForm=this.fb.group({
      name: ["", [Validators.required]],
      username: ["", [Validators.required]],
      email: ["", [Validators.email]],
      website: ["", []],
      phone: ["", [Validators.pattern("[0-9]{9,10}")]],
      picker: [new Date()],
      gender: [""],
      bio: ["", []],
      privacy:[''],
      allowMessages:[''],
      allowTags:[''],
    })
    

  }

  getInfo(){
    this.service.getUserInfo().subscribe(
      res => 
      {
        this.changeInfo = res;
        console.log(this.changeInfo);
        this.infoForm.get('name').setValue(this.changeInfo.name);
        this.infoForm.get('username').setValue(this.changeInfo.username);
        this.infoForm.get('email').setValue(this.changeInfo.email);
        this.infoForm.get('website').setValue(this.changeInfo.website);
        this.infoForm.get('phone').setValue(this.changeInfo.phone);
        this.infoForm.get('picker').setValue(new Date(this.changeInfo.date));
        this.infoForm.get('gender').setValue(this.changeInfo.gender.toLowerCase());
        this.infoForm.get('bio').setValue(this.changeInfo.bio);
        this.infoForm.get('privacy').setValue(this.changeInfo.private);
        this.infoForm.get('allowMessages').setValue(this.changeInfo.allowMessages);
        this.infoForm.get('allowTags').setValue(this.changeInfo.allowTags);
        console.log(this.infoForm.value.picker);
      },
      err => {
        console.log(err);
        }
    );
  }

  submit(){
    var oldUsername=this.changeInfo.username;
    this.changeInfo.name = this.infoForm.value.name;
    this.changeInfo.username = this.infoForm.value.username;
    this.changeInfo.email = this.infoForm.value.email;
    this.changeInfo.website = this.infoForm.value.website;
    this.changeInfo.date = this.infoForm.value.picker;
    this.changeInfo.bio = this.infoForm.value.bio;
    this.changeInfo.gender = this.infoForm.value.gender;
    this.changeInfo.phone = this.infoForm.value.phone;
    this.changeInfo.private = this.infoForm.value.privacy;
    this.changeInfo.allowMessages = this.infoForm.value.allowMessages;
    this.changeInfo.allowTags = this.infoForm.value.allowTags;
    
    console.log(this.changeInfo.gender);
    
    this.service.changeInfo(this.changeInfo).subscribe(
      res=>{
          if(oldUsername===this.changeInfo.username)
            this.ngOnInit();
          else{
            this.logout();
          }
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
