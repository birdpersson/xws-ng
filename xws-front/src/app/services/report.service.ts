import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportDTO } from '../dto/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private readonly _APIUrl="http://localhost:8080/report/";
  constructor(private http: HttpClient) { }

  saveReport(report: ReportDTO){
    return this.http.post(this._APIUrl + "saveReport", report);
  }

  getUsernames(username:string):Observable<string[]>{
    return this.http.get<string[]>(this._APIUrl + "getUsernames/" + username);
  }
}
