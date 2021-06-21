import { VerificationRequest } from './../../model/verification-request.model';
import { VerificationService } from 'src/app/services/verification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-requests',
  templateUrl: './review-requests.component.html',
  styleUrls: ['./review-requests.component.css']
})
export class ReviewRequestsComponent implements OnInit {

  constructor(private verificationService:VerificationService) { }


  verificationRequests:VerificationRequest[]=[];
  v:VerificationRequest;
  ngOnInit(): void {
   /* this.v=new VerificationRequest();
    this.v.name="Marko Markovic";
    this.v.category="Sports";
    this.v.id=1;
    this.v.mediaUrl="jdasl";
    this.verificationRequests.push(this.v);
    this.v.id=2;
    this.verificationRequests.push(this.v);*/
    this.fillRequest();
   
  }
  approved(id:number){
    this.verificationService.deleteVerificationRequest(id).subscribe(
    res=>{
      alert("Request approved");
      this.fillRequest();
    }
    )}
  reject(id:number){
    this.verificationService.deleteVerificationRequest(id).subscribe(
      res=>{
        alert("Request rejected");
        this.fillRequest();
      }
      )
    }

  fillRequest(){
    this.verificationService.getAllVerificationRequest().subscribe(
      (data)=>{
          this.verificationRequests=(data);
      }
    );
  }

}
