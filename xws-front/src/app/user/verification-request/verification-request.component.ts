import { UserService } from 'src/app/services/user.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerificationRequestDTO } from 'src/app/dto/verification-request-dto.model';

@Component({
  selector: 'app-verification-request',
  templateUrl: './verification-request.component.html',
  styleUrls: ['./verification-request.component.css']
})
export class VerificationRequestComponent implements OnInit {


  public verificationForm :FormGroup;


  constructor(private fb: FormBuilder,private postService:PostService,private userService:UserService) { }

  selectedFiles: FileList;
  fileInfo: string='';
  clicked: boolean=false;
  i: number = 0;
  dto:VerificationRequestDTO=new VerificationRequestDTO;

  ngOnInit(): void {
     this.verificationForm=this.fb.group({
      firstname:['',Validators.required],
      surname: ['', [Validators.required]],
      category:['',[Validators.required]],
      file:[]
    });
  }


  uploadClicked(){
    this.clicked = true;
  }

  selectFiles(event) {
    
    this.selectedFiles = event.target.files;
  }

  uploadFiles(){
    const formData = new FormData();

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(this.selectedFiles[i]);
    }

  }

  upload(file){
    this.uploadClicked();
    
    this.postService.upload(file).subscribe(
      event => {
        
        this.fileInfo = event.replace('[', '').replace(']','').replace('"','').replace('"','').replace('\\','').replace('\\\\','\\').replace('\\\\','\\').replace('\\\\','\\').replace('\\\\','\\').replace('\\\\','\\');
        console.log(this.fileInfo);
        
      }, 
      err => {
        
      });
    
  }
  send(){
    this.dto.name=this.verificationForm.controls["firstname"].value;
    this.dto.name=' '+this.verificationForm.controls["surname"].value;
    this.dto.category=this.verificationForm.controls["category"].value;
    this.dto.mediaurl=this.fileInfo;
    this.userService.sendVerificationRequest(this.dto).subscribe(
      res=>
      console.log(res)
    );
  }

}
