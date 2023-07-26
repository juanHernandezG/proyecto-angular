import { Injectable } from '@angular/core';
import { Producto } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private apiUrl = 'http://localhost/3000';

  public producto:Producto[] = [];

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:3000/producto')
      .pipe(map((res:any)=> res.data));
  }

  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/borrarproducto/' + id);
  }
  
}
