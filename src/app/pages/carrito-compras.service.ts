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
  
  actualizarStock(tipo: number, color: string, talla: string, nuevoStock: number): Observable<any> {
    const body = {
      tipo: tipo,
      color: color,
      talla: talla,
      stock: nuevoStock
    };

    // Realizar la solicitud PUT al servidor
    return this.http.put<any>("http://localhost:3000/actualizarstock/", body);
  }
  
  getStockPorProducto(idtipo: number, color: string, talla: string): Observable<number> {
    const url = `http://localhost:3000/stock?idtipo=${idtipo}&color=${color}&talla=${talla}`;
    return this.http.get<number>(url);
  }

  getSTallaPorColor(idtipo: number, color: string): Observable<number[]> {
    const url = `http://localhost:3000/tallacolor?idtipo=${idtipo}&color=${color}`;
    return this.http.get<number[]>(url);
  }

}
