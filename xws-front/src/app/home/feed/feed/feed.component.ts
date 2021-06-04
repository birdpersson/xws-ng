import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  liked: boolean = false;
  showComments: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  like(){
    this.liked = !this.liked;
  }

  show(){
    this.showComments = !this.showComments;
  }

}
