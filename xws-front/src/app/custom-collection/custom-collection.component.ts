import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectionPostDTO } from '../dto/collectionPostDTO.model';
import { CollectionDTO } from '../dto/custom-collection.model';
import { CustomCollectionService } from '../services/custom-collection.service';

@Component({
  selector: 'app-custom-collection',
  templateUrl: './custom-collection.component.html',
  styleUrls: ['./custom-collection.component.css']
})
export class CustomCollectionComponent implements OnInit {


  collectionForm: FormGroup;
  posts: CollectionPostDTO[];
  collection: CollectionDTO;
  constructor(private service: CustomCollectionService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPosts();
    this.collectionForm = this.fb.group({
      name: ['', Validators.required],
      imageList: ['', Validators.required]
    })
  }

  getPosts(){
    this.service.getPosts().subscribe(
      res=>{
        this.posts = res;
      }
    )
  }

  saveCollection(){
    let name = this.collectionForm.value.name;
    let ids = this.collectionForm.value.imageList;
    this.collection = new CollectionDTO(name, ids);
    this.service.saveCollection(this.collection).subscribe(
      res=> {
          alert("Collection created successfully")
      }
    )
  }

}
