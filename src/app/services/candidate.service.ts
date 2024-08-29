import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:8080/api'

  uploadCandidate(data:any):Observable<any>{
    return this.http.post(`${this.url}/create_candidate`,data)
  }
}
