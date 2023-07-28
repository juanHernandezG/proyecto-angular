import { Injectable } from '@angular/core';
import { Producto } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private apiUrl = 'http://localhost/3000';

  private carrito: Producto[] = [];

  constructor(private http:HttpClient) { }

  getCarrito(): Producto[] {
    return this.carrito;
  }

  agregarAlCarrito(producto: Producto): Observable<any> {
    const url = "http://localhost:3000/agregarproducto" ;
    return this.http.post(url, producto);
  }


  eliminarDelCarrito(idproducto: number): void {
    this.carrito = this.carrito.filter(p => p.idproducto !== idproducto);
  }

  vaciarCarrito(): void {
    this.carrito = [];
  }
  
}
