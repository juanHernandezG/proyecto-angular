import { Injectable } from '@angular/core';
import { Producto } from './products';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  constructor() { }

  carrito: Producto[] = [];

  agregarAlCarrito(producto: Producto) {
    const productoExistente = this.carrito.find((p: Producto) => p.idproducto === producto.idproducto);

    if (productoExistente) {
      productoExistente.cantidad += producto.cantidad;
    } else {
      this.carrito.push(producto);
    }
  }

  eliminarDelCarrito(idProducto: number) {
    this.carrito = this.carrito.filter((producto: Producto) => producto.idproducto !== idProducto);
  }

  obtenerCarrito(): Producto[] {
    return this.carrito;
  }

  calcularPrecioTotal(): number {
    let total = 0;
    this.carrito.forEach((producto: Producto) => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  }
}
