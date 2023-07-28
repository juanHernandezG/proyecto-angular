import { Injectable } from '@angular/core';
import { Producto } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private apiUrl = 'http://localhost/3000';

  public carrito: Producto[] = [];

  constructor(private http:HttpClient) { }

  getCarrito(): Producto[] {
    return this.carrito;
  }

  getCarro(): Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:3000/producto')
      .pipe(map((res:any)=> res.data));
  }

  agregarAlCarrito(producto: Producto): Observable<any> {
    const url = "http://localhost:3000/agregarproducto" ;
    return this.http.post(url, producto);
  }

  delete(idproducto: number): Observable<number> {
    const url = "http://localhost:3000/borrarproducto/"+idproducto;
    return this.http.delete<number>(url);
  }
  
  eliminarDelCarrito(idproducto: number): void {
    this.carrito = this.carrito.filter(p => p.idproducto !== idproducto);
  }

  vaciarCarrito(): void {
    this.carrito = [];
  }

  actualizarStock(idtipo: number, talla: string, color: string, cantidadProductos: number): Observable<any> {
    const url = `${this.apiUrl}/actualizarstock`;
    const data = { idtipo, talla, color, stock: cantidadProductos };
    return this.http.post(url, data);
  }
  
}
