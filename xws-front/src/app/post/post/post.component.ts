import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {COMMA, ENTER, I, SPACE} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Post } from 'src/app/dto/post.model';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  i: number = 0;
  postForm: FormGroup;
  selectedOption: string;
  visible = true;
  post: Post;
  postType: string;
  caption: string;
  isHighlighted: boolean = false;
  location: string;
  isSelected:boolean = true;
  clicked = false;
  selectable = true;
  removable = true;
  friends: any[] = [];
  closeFriends: any[] = Array();
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  tags: Array<string> = new Array();
  tagSet: Set<string>;
  showFriends: boolean = false;
  selectedFiles: FileList;
  fileInfos: string[] = [];

  
  constructor(private fb: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.getFriends();
      this.postForm = this.fb.group({
        postType: [''],
        location: [''],
        desc: [''],
        fileForm: this.fb.group({
          file: []
        }),
        tags: [this.tags],
        highlight: [false],
        friendListPost: [this.friends],
        friendListStory: []

      });
  }

  

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.input.value = '';
    for(var f of this.tags){
      console.log(f);
    }
  }

  remove(s: string): void {
    const index = this.tags.indexOf(s);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }


  show(){
    this.showFriends = !this.showFriends;
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
        
           /*event.replace('[', '').replace(']','').replace('"','').replace('"','').replace('\\','').replace('\\\\','\\').replace('\\\\','\\').replace('\\\\','\\').replace('\\\\','\\').replace('\\\\','\\');*/
        this.i++;
        
      }, 
      err => {
        
      });
    
  }

  getFriends(){
    this.postService.getFriends().subscribe(
      res=> {
        this.friends = res;
      }
    )
  }

  checkValue(){
    if(this.isHighlighted){

    }
  }

  createPost(){
    console.log(this.tags);
    
    if(this.postForm.get('postType').value == "post"){
      this.closeFriends = this.postForm.get('friendListPost').value;
    }
    else{
      this.closeFriends = this.postForm.get('friendListStory').value;
    }
    console.log(this.closeFriends);
    this.isHighlighted = this.postForm.value.highlight;
    console.log(this.isHighlighted);
    console.log(this.closeFriends);
    this.caption = this.postForm.value.desc;
    this.location = this.postForm.value.location;
    this.isHighlighted = this.postForm.value.highlight;
    this.postType = this.postForm.value.postType;
    this.post = new Post(this.caption,this.location,this.postType,this.isHighlighted,this.tags, this.fileInfos, this.closeFriends);
    this.postService.createPost(this.post).subscribe(
      res=> {
          alert("Post created successfully")
      }
    )
  }

  // toggleAllSelection() {
  //   if (this.allSelected.selected) {
  //     this.postForm.controls.friendList
  //       .patchValue([...this.postForm.get('friendList').map(item => item.key), 0]);
  //   } else {
  //     this.postForm.controls.friendList.patchValue([]);
  //   }
  // }
  
}
