import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Producto } from '../products';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  productos: Producto[] = [];
  precioTotal: number = 0;
  cantidadTotal: number = 0;

  constructor(private carritoService: CarritoComprasService, private router: Router) {
    // Obtener la lista de productos del carrito desde el servicio y calcular el precio total al inicializar el componente
    this.carritoService.getCarro().subscribe(
      (res: Producto[]) => {
        this.productos = res;
        this.calcularPrecioTotal();
        this.calcularCantidadTotal(); 
        console.log(this.carritoService.carrito);
      },
      (err) => console.log(err)
    );
    
  }

  ngOnInit(): void {
    // No es necesario tener la llamada a this.carritoService.getCarro().subscribe() aquí,
    // ya que se realiza en el constructor y obtendrá los datos al inicializar el componente.
  }

  eliminarProducto(producto: Producto): void {
    // Resto del código...
    this.carritoService.delete(producto.idproducto).subscribe(
      (idProductoEliminado: number) => {
        console.log(`Producto eliminado con id: ${idProductoEliminado}`);
        // Actualizamos los productos y recalculamos el precio total
        this.actualizarProductos();
        this.calcularCantidadTotal(); 
      },
      (error) => {
        console.log('Error al eliminar producto:', error);
        // Ocurrió un error al eliminar el producto del carrito en el servidor
        // Puedes mostrar un mensaje de error o realizar acciones para manejar el error.
      }
    );
  }

  private actualizarProductos(): void {
    // Llamar al servicio para obtener el carrito actualizado
    this.carritoService.getCarro().subscribe(
      (res: Producto[]) => {
        this.productos = res; // Actualizamos los productos que se están mostrando en el componente
        this.calcularPrecioTotal(); // Recalculamos el precio total
        this.calcularCantidadTotal(); 
      },
      (err) => console.log(err)
    );
  }

  private calcularPrecioTotal(): void {
    // Calcular el precio total sumando el precio de cada producto en el carrito teniendo en cuenta la cantidad
    this.precioTotal = this.productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }

  private calcularCantidadTotal(): void {
    // Calcular la cantidad total sumando la cantidad de cada producto en el carrito
    this.cantidadTotal = this.productos.reduce((total, producto) => total + producto.cantidad, 0);
  }

  confirmarCompra(): void {
    // Verificar que se estén obteniendo los productos correctamente
    console.log('Productos del carrito:', this.productos);
  
    // Utilizamos el servicio CarritoComprasService para almacenar temporalmente los datos del carrito
    this.carritoService.guardarProductosCarrito(this.productos);
  
    // Navegamos a la página del StepperComponent
    this.router.navigate(['/comprar']);
  }
  
}
