import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VerificationRequestDTO } from '../dto/verification-request-dto.model';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  private readonly _APIUrl="http://localhost:8080/api/user/verification";

  constructor(private _http: HttpClient) { }

  sendVerificationRequest(dto:VerificationRequestDTO):Observable<any>{
    return this._http.post(this._APIUrl+'/',dto);
  }

  getAllVerificationRequest():Observable<any>{
    return this._http.get(this._APIUrl+'/');
  }

  deleteVerificationRequest(id:number):Observable<any>{
    return this._http.delete(this._APIUrl+'/'+id);
  }
}
