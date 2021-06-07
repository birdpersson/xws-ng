import { User } from './../dto/user.model';
import { SearchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder,private searchService:SearchService) { }

  selectedIndex:number;
  users:User[]=[];
  locations:String[]=[];
  hashtags:String[]=[];

  public searchForm :FormGroup;
  ngOnInit(): void {
    this.searchForm=this.fb.group({
      query: ['']
    })
    this.selectedIndex=0;
  }
  
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex=tabChangeEvent.index;
    console.log(this.selectedIndex);
    this.checkSelectedTab();
  }
  checkSelectedTab(){
    if(this.searchForm.controls['query'].value!=""){
      switch(this.selectedIndex){
        case 0:
          {
            this.searchUser();
            break;
            }
        case 1:
          {
            this.searchTag();
            break;
          }
        case 2:
          {
            this.searchLocation()
            break;
          }
           }
    }
    
  
      
  }
  searchLocation() {
    this.searchService.searchLocation(this.searchForm.controls['query'].value).subscribe(
      l=>{
        this.locations=l;
        console.log(this.locations);
      },err=>{
        console.log(err.error);
        
      });
  }
  searchTag() {
    this.searchService.searchHashtags(this.searchForm.controls['query'].value).subscribe(
      t=>{
        this.hashtags=t;
        console.log(this.hashtags);
      },err=>{
        console.log(err.error);
        
      });
  }
  searchUser() {
    this.searchService.searchUser(this.searchForm.controls['query'].value).subscribe(
      u=>{
        this.users=u;
        console.log(this.users);
      },err=>{
        console.log(err.error);
        
      }
    )
  }

}
