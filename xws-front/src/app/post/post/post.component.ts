import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {COMMA, ENTER, I, SPACE} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
export class Fruit {
  name: string;
}


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postForm: FormGroup;
  selectedOption: string;
  visible = true;
  selectable = true;
  removable = true;
  friends: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'adadda', 'asdadad', 'asdadwq', 'Moccasins', 'Moccasins', 'Moccasins', 'Moccasins', 'Moccasins', 'Moccasins'];
  closeFriends: any[] = Array();
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  fruits: Fruit[] = [];
  showFriends: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.postForm = this.fb.group({
        postType: [''],
        location: [''],
        desc: [''],
        tags: [this.fruits],
        highlight: [],
        friendList: []

      });
  }

  uploadFiles(){}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.input.value = '';
    for(var f of this.fruits){
      console.log(f.name);
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  ok(list){
    for(let l of list){
      this.closeFriends.push(l.value);
      
    }
    
    //return this.closeFriends;
    console.log(this.closeFriends);
  }

  show(){
    this.showFriends = !this.showFriends;
  }
  
  

  
}
