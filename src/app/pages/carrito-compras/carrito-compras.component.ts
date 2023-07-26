import { Component } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Producto } from '../products';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {

  carrito: Producto[] = [];

  constructor(public carritoService: CarritoComprasService) {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  eliminarDelCarrito(idProducto: number) {
    this.carritoService.eliminarDelCarrito(idProducto);
    this.carrito = this.carritoService.obtenerCarrito();
  }
}
