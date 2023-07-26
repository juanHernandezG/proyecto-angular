import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Color, Diseno, Mangalarga, Polera, Poleron, Polo, Producto, Talla, Tipo } from './products';

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

  public talla:Talla[]=[];

  public disenos:Diseno[] = [];

  public productos:Producto[] = [];


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

  getTalla(): Observable<Talla[]>{
    return this.http.get<Talla[]>('http://localhost:3000/talla')
      .pipe(map((res:any)=> res.data));
  }

  getColor(idTipo: number): Observable<Color[]> {
    const url = `http://localhost:3000/color/${idTipo}`;
    return this.http.get<Color[]>(url);
  }

  getDiseno(): Observable<Diseno[]>{
    return this.http.get<Diseno[]>('http://localhost:3000/diseno')
      .pipe(map((res:any)=> res.data));
  }

  getProducto(): Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:3000/producto')
      .pipe(map((res:any)=> res.data));
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

  getPrecioBasePorTipo(idtipo: number): Observable<number> {
    const url = `${this.apiUrl}/precio/${idtipo}`;
    return this.http.get<number>(url);
  }

}
