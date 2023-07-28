import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Producto } from '../products';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit{

  productos: Producto[] = []; // Reemplaza 'Producto' con la interfaz o clase que represente a los productos en el carrito
  precioTotal: number = 0;
  cantidad: number = 0;

  constructor(private carritoService: CarritoComprasService) {

    this.carritoService.getCarro().subscribe(
      (res: Producto[]) => {
        this.productos = res;
        console.log(this.carritoService.carrito);
      },
      err => console.log(err)
    );
  }

  

  ngOnInit(): void {
    this.productos = this.carritoService.getCarrito(); // Obtener la lista de productos del carrito desde el servicio

    // Calcular el precio total al inicializar el componente
    this.calcularPrecioTotal();

    this.carritoService.getCarro().subscribe(data => {
      this.productos = data;
      console.log(data);
    });

    this.actualizarProductos();
    
  }

  private actualizarProductos(): void {
    // Llamar al servicio para obtener el carrito actualizado
    this.carritoService.getCarro().subscribe(
      (res: Producto[]) => {
        this.productos = res; // Actualizamos los productos que se están mostrando en el componente
        this.calcularPrecioTotal(); // Recalculamos el precio total
      },
      err => console.log(err)
    );
  }

  eliminarProducto(producto: Producto): void {
    // Restar 1 a la cantidad del producto en el carrito
    if (producto.cantidad > 1) {
      producto.cantidad -= 1;
    } else {
      // Si la cantidad es 1 o menos, eliminar el producto del carrito
      this.carritoService.delete(producto.idproducto).subscribe(
        (idProductoEliminado: number) => {
          console.log(`Producto eliminado con id: ${idProductoEliminado}`);
          // Actualizamos los productos y recalculamos el precio total
          this.actualizarProductos();
        },
        (error) => {
          console.log(error); // Imprime el error en la consola
          // Ocurrió un error al eliminar el producto del carrito en el servidor
          // Puedes mostrar un mensaje de error o realizar acciones para manejar el error.
        }
      );
    }
  }

  private calcularPrecioTotal(): void {
    // Calcular el precio total sumando el precio de cada producto en el carrito teniendo en cuenta la cantidad
    this.precioTotal = this.productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  }

  // Resto del código del componente...
  // ...
  

}
