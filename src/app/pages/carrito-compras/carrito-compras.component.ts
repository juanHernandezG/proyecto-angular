import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Producto } from '../products';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  productos: any[] = [];
  precioTotal: number = 0;

  constructor(private carritoService: CarritoComprasService) {

    this.carritoService.getProductos().subscribe(
      (res: Producto[]) => {
        this.productos = res;
        console.log(this.productos);
      },
      err => console.log(err)
    );
  }


  

  ngOnInit(): void {

    console.log(this.productos);
    
    // Calcula el precio total al inicializar el componente
    this.calcularPrecioTotal();
  }

  calcularPrecioTotal() {
    // Inicializa el precio total a cero
    this.precioTotal = 0;

    // Recorre los productos y suma los precios
    for (const producto of this.productos) {
      // Asegúrate de que producto.precio sea un número
      const precio = parseFloat(producto.precio);

      // Si el precio es un número válido, agrégalo al precio total
      if (!isNaN(precio)) {
        this.precioTotal += precio;
      }
    }

    
  }

  eliminarProducto(producto: any) {
    this.carritoService.eliminarProducto(producto.idproducto).subscribe(
      () => {
        // Eliminación exitosa, actualiza los productos y recalcula el precio total
        this.productos = this.productos.filter(p => p.idproducto !== producto.idproducto);
        this.calcularPrecioTotal();
      },
      err => console.log(err)
    );
  }


}
