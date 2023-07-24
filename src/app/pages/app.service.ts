import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost/3000/tipo';

  public products:IProduct[] = [];

  constructor(private http: HttpClient) { }

  getTipo(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/tipo')
      .pipe(map((res:any)=> res.data));
  }

}
