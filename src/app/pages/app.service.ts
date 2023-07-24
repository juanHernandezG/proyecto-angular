import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost/3000/tipo';


  constructor(private http: HttpClient) { }

  getTipo(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/tipo').pipe(map((res:any) => res.data));
  }

}
