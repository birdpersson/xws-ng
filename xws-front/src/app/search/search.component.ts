import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  selectedIndex:number;

  public searchForm :FormGroup;
  ngOnInit(): void {
    this.searchForm=this.fb.group({
      search: ['']
    })
    this.selectedIndex=0;
  }
  
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex=tabChangeEvent.index;
    console.log(this.selectedIndex);
    this.checkSelectedTab();
  }
  checkSelectedTab(){
    
    switch(this.selectedIndex){
      case 0:
        {this.searchUser()}
      case 1:
        {this.searchTag()}
      case 2:
        {this.searchLocation()}
         }
      
  }
  searchLocation() {
    throw new Error('Method not implemented.');
  }
  searchTag() {
    throw new Error('Method not implemented.');
  }
  searchUser() {
    throw new Error('Method not implemented.');
  }

}
