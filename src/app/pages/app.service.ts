import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Mangalarga, Polera, Poleron, Polo, Tipo } from './products';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost/3000';

  public products:Tipo[] = [];

  public polera:Polera[] = [];

  public mangalarga:Mangalarga[] = [];

  public poleron:Poleron[] = [];

  public polo:Polo[] = [];


  constructor(private http: HttpClient) { }

  getTipo(): Observable<Tipo[]>{
    return this.http.get<Tipo[]>('http://localhost:3000/tipo')
      .pipe(map((res:any)=> res.data));
  }

  getPoleras(): Observable<Polera[]>{
    return this.http.get<Polera[]>('http://localhost:3000/polera')
      .pipe(map((res:any)=> res.data));
  }

  getMangalarga(): Observable<Mangalarga[]>{
    return this.http.get<Polera[]>('http://localhost:3000/mangalarga')
      .pipe(map((res:any)=> res.data));
  }

  getPoleron(): Observable<Poleron[]>{
    return this.http.get<Poleron[]>('http://localhost:3000/poleron')
      .pipe(map((res:any)=> res.data));
  }

  getPolo(): Observable<Polo[]>{
    return this.http.get<Polo[]>('http://localhost:3000/polo')
      .pipe(map((res:any)=> res.data));
  }

  getProductoByIdTipo(idTipo: number): Observable<any> {
    const url = `${this.apiUrl}/producto/${idTipo}`;
    return this.http.get(url);
  }

  getColor(idTipo: number): Observable<any> {
    const url = `${this.apiUrl}/color/${idTipo}`;
    return this.http.get(url);
  }

  getPreciosByIdTipo(idTipo: number): Observable<number[]> {
    const url = `${this.apiUrl}/precio/${idTipo}`;
    return this.http.get<{
      message: string | undefined; error: boolean, data: number[] 
}>(url).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.message);
        }
        return response.data;
      })
    );
  }


}
