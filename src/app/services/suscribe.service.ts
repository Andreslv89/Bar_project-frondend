import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscribeService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:8080/api'

  createSubcribe(data:any):Observable<any>{
    return this.http.post(`${this.url}/subscribe`, data)
  }
}
