import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReportDTO } from '../dto/report.model';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reportForm:FormGroup;
  usernames:string[];
  report: ReportDTO;
  username:string;
  repUsername:string;
  reason:string;
  un: string;
  constructor(private fb:FormBuilder, private service: ReportService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
       this.un = params['username'];// you should have your id here.
       console.log(this.un);
      });
    this.getInfo(this.un);
  }


  submit(){
    this.username = this.reportForm.get('username').value;
    this.repUsername = this.reportForm.get('repUsername').value;
    this.reason = this.reportForm.value.reason;
    console.log(this.username);
    this.service.saveReport(new ReportDTO(this.username, this.repUsername, this.reason)).subscribe(
      res=> {
        alert("Report saved successfully");
      }
    )
  }

  getInfo(un){
    this.service.getUsernames(un).subscribe(
      res => 
      {
        this.usernames = res;
        
        this.reportForm = this.fb.group({
          username:[{value: this.usernames[0], disabled: true}],
          repUsername: [{value: this.usernames[1],disabled: true}],
          reason: []
        });
        console.log(this.usernames[1]);
        console.log(this.reportForm.get('repUsername').value);
       
      },
      err => {
        console.log(err);
        }
    );
  }
}
