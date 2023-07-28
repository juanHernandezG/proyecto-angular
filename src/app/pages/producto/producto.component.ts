import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Prod, Tipo } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  tipos: Tipo[] = [];
  disenos: any[] = [];
  nombreTipo: string = '';
  imagenSeleccionada: string | null = null;
  imagenPredeterminada: string = '';
  archivoSeleccionado: File | null = null;
  idtipo: number | undefined;
  cantidadProductos = 1;
  precioSegunTipo: number | undefined;
  colores: string[] = [];
  tallas: string[] = [];
  imagenes: string[] = [];
  tallasPorColor: string[] = []; // Variable para almacenar las tallas únicas asociadas con el color seleccionado
  prods: Prod[] = [];
  stockTotalPorColor: number = 0;
  tallaSeleccionada: string | null = null;
  colorSeleccionado: string | null = null;
  stockTotalPorTalla: { [talla: string]: number } = {};
  stockTotalPorColorYTalla: number = 0;
  tallaSeleccionadaAnterior: string | null = null;
  precioBase: number | undefined;
  

  constructor(private tipoService: AppService, private route: ActivatedRoute, private carritoService: CarritoComprasService) {

    this.tipoService.getProd().subscribe(
      (res: Prod[]) => {
        this.prods = res;
        console.log(this.tipoService.prods);
      },
      err => console.log(err)
    );

    this.tipoService.getDiseno().subscribe((res: any[])=>{
      this.tipoService.disenos = res;
      console.log(this.tipoService.disenos);
    },
    err => console.log(err)
    )
  }

  ngOnInit(): void {

    this.tipoService.getProd().subscribe(data => {
      this.prods = data;
      console.log(data);
    });

    this.tipoService.getDiseno().subscribe(data => {
      this.disenos = data;
      console.log(data);
    })

    this.tipoService.getTipo().subscribe((data: Tipo[]) => {
      this.tipos = data;

      // Obtener el nombre del tipo seleccionado según el idtipo que tienes en la URL
      const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
      const tipoSeleccionado = this.tipos.find((tipo: Tipo) => tipo.idtipo === idTipoSeleccionado);
      this.nombreTipo = tipoSeleccionado ? tipoSeleccionado.nombre : '';
      this.imagenPredeterminada = tipoSeleccionado ? tipoSeleccionado.imagen: '';
      
    });

    this.idtipo = Number(this.route.snapshot.paramMap.get('idtipo'));

    // Obtener el nombre del tipo seleccionado según el idtipo que tienes en la URL
    this.tipoService.getTipo().subscribe((data: Tipo[]) => {
      this.tipos = data;

      const tipoSeleccionado = this.tipos.find((tipo: Tipo) => tipo.idtipo === this.idtipo);
      this.nombreTipo = tipoSeleccionado ? tipoSeleccionado.nombre : '';
    });

    // Obtener el precio base

    this.route.paramMap.subscribe(params => {
      // Obtener el tipo desde los parámetros de la URL
      this.idtipo = Number(params.get('idtipo'));

      // Obtener la lista de productos desde el servicio
      this.tipoService.getProd().subscribe(data => {
        this.prods = data;

        // Filtrar la lista de productos para obtener solo los que coinciden con el tipo proporcionado
        const productosFiltrados = this.prods.filter(prod => prod.tipo === this.idtipo);

        // Extraer los colores únicos de los productos filtrados y guardarlos en la variable colores
        this.colores = [...new Set(productosFiltrados.map(prod => prod.color))];
        this.tallas = [...new Set(productosFiltrados.map(prod => prod.talla))];
        this.imagenes = [...new Set(productosFiltrados.map(prod => prod.imagen))];

        // Mostrar el precio si se encontró al menos un producto con el tipo proporcionado
        if (productosFiltrados.length > 0) {
          this.precioSegunTipo = productosFiltrados[0].precio; // Puedes tomar el precio del primer producto encontrado
          this.precioBase = this.precioSegunTipo; // Almacenar el precio base sin el diseño seleccionado
        } else {
          this.precioSegunTipo = undefined; // No se encontró un producto con el tipo proporcionado
          this.precioBase = undefined;
        }
      });
    });
  }

  filterTallasAndStockPorColor(colorSeleccionado: string): void {
    // Filtrar los productos que coinciden con el color seleccionado
    const productosFiltradosPorColor = this.prods.filter(prod => prod.color === colorSeleccionado);
  
    // Obtener las tallas únicas asociadas con el color seleccionado
    this.tallasPorColor = [...new Set(productosFiltradosPorColor.map(prod => prod.talla))];
  
    // Crear un objeto para almacenar el stock por talla
    const stockPorTalla: { [talla: string]: number } = {};
  
    // Calcular el stock por talla para el color seleccionado
    productosFiltradosPorColor.forEach(prod => {
      if (stockPorTalla[prod.talla]) {
        stockPorTalla[prod.talla] += prod.stock;
      } else {
        stockPorTalla[prod.talla] = prod.stock;
      }
    });
  
    // Asignar el stock por talla al componente
    this.stockTotalPorTalla = stockPorTalla;
  }
  

  // Agrega esta función en el componente
  onColorSelected(): void {
    if (this.colorSeleccionado !== null) {
      // Guardar la talla seleccionada actual antes de cambiar el color
      this.tallaSeleccionadaAnterior = this.tallaSeleccionada;
      // Reiniciar la talla seleccionada actual
      this.tallaSeleccionada = null;
      // Actualizar la imagen predeterminada con la imagen del producto seleccionado para el color
      const productoSeleccionado = this.prods.find(
        prod => prod.color === this.colorSeleccionado && prod.tipo === this.idtipo
      );
      if (productoSeleccionado) {
        this.imagenPredeterminada = productoSeleccionado.imagen;
      } else {
        // Si no se encontró un producto para el color seleccionado, usar la imagen predeterminada
        this.imagenPredeterminada = this.imagenPredeterminada;
      }
    }
  }

  onTallaSelected(): void {
    if (this.tallaSeleccionada !== null && this.colorSeleccionado !== null) {
      // Filtrar stock según el color y talla seleccionados
      this.filterTallasAndStockPorColorYTalla(this.colorSeleccionado, this.tallaSeleccionada);

      // Si hay un diseño seleccionado, aumentar el precio sumando 7000 al precio base
      if (this.precioBase !== undefined && this.imagenSeleccionada) {
        this.precioSegunTipo = this.precioBase + 7000;
      } else {
        // Si no hay un diseño seleccionado, volver al precio base sin aumento
        this.precioSegunTipo = this.precioBase;
      }
    }
  }

  getTallasForColor(colorSeleccionado: string | null): string[] {
    if (!colorSeleccionado || !this.idtipo) {
      return [];
    }
  
    // Filtrar los productos que coinciden con el color seleccionado y el idtipo
    const productosFiltradosPorColorYTipo = this.prods.filter(
      prod => prod.color === colorSeleccionado && prod.tipo === this.idtipo
    );
  
    // Obtener las tallas únicas asociadas con el color y el idtipo seleccionado
    return [...new Set(productosFiltradosPorColorYTipo.map(prod => prod.talla))];
  }
  
  filterTallasAndStockPorColorYTalla(colorSeleccionado: string, tallaSeleccionada: string): void {
    if (!this.idtipo) {
      return; // Salir si el idtipo no está definido
    }
  
    // Filtrar los productos que coinciden con el color, talla y el idtipo seleccionados
    const productosFiltradosPorColorYTalla = this.prods.filter(
      prod => prod.color === colorSeleccionado && prod.talla === tallaSeleccionada && prod.tipo === this.idtipo
    );
  
    // Calcular el stock total para el color, talla y idtipo seleccionados
    const stockTotal = productosFiltradosPorColorYTalla.reduce((acc, prod) => acc + prod.stock, 0);
  
    // Mostrar el stock total en el campo de stock
    this.stockTotalPorColorYTalla = stockTotal;
  }

  actualizarPrecioConDiseno(): void {
    if (this.precioBase !== undefined) {
      this.precioSegunTipo = this.precioBase + 7000;
    }
  }  

  onDesignSelected(): void {
    if (this.imagenSeleccionada) {
      // Actualizar el precio al seleccionar un diseño
      this.actualizarPrecioConDiseno();
    }
  }  
  
  
}