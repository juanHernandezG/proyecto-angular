import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Color, Diseno, IProduct, Producto, Talla } from './products';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost/3000';

  public products:IProduct[] = [];

  public tallas:Talla[] = [];

  public colores:Color[] = [];

  public disenos:Diseno[] = [];

  public productos:Producto[] = [];


  constructor(private http: HttpClient) { }

  getTipo(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/tipo')
      .pipe(map((res:any)=> res.data));
  }

  getTalla(): Observable<Talla[]>{
    return this.http.get<Talla[]>('http://localhost:3000/talla')
      .pipe(map((res:any)=> res.data));
  }

  getColor(): Observable<Color[]>{
    return this.http.get<Color[]>('http://localhost:3000/color')
      .pipe(map((res:any)=> res.data));
  }

  getDiseno(): Observable<Diseno[]>{
    return this.http.get<Diseno[]>('http://localhost:3000/diseno')
      .pipe(map((res:any)=> res.data));
  }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:3000/producto')
      .pipe(map((res:any)=> res.data));
  }


  

}
