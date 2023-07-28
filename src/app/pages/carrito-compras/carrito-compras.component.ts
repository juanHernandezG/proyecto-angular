import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Producto } from '../products';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {

  productos: Producto[] = []; // Reemplaza 'Producto' con la interfaz o clase que represente a los productos en el carrito
  precioTotal: number = 0;

  constructor(private carritoService: CarritoComprasService) {}

  ngOnInit(): void {
    this.productos = this.carritoService.getCarrito(); // Obtener la lista de productos del carrito desde el servicio

    // Calcular el precio total al inicializar el componente
    this.calcularPrecioTotal();
  }

  eliminarProducto(producto: Producto): void {
    this.carritoService.eliminarDelCarrito(producto.idproducto); // Eliminar el producto del carrito en el servicio

    // Volver a calcular el precio total después de eliminar el producto
    this.calcularPrecioTotal();
  }

  private calcularPrecioTotal(): void {
    // Calcular el precio total sumando el precio de cada producto en el carrito
    this.precioTotal = this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

}
