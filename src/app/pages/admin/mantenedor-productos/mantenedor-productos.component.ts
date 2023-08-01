import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { AppService } from '../../app.service';
import { Allproduct, Polera, Tipo, UIPolera, UIProd, UItipoNombres } from '../../products';
import { ModalAddService } from '../../services/modal-add.service';
import { ModalAddStockService } from '../../services/modal-add-stock.service';

@Component({
  selector: 'app-mantenedor-productos',
  templateUrl: './mantenedor-productos.component.html',
  styleUrls: ['./mantenedor-productos.component.css']
})
export class MantenedorProductosComponent implements  OnInit {

  product: Allproduct[] = [];
  idProductoSeleccionado: number = 0;
  prod: UIProd[] = [];
  tipos: Tipo[] = [];
  tipoNombre: UItipoNombres[] = [];
  //productoSeleccionado: any;
  nombreTipo: string = '';
  constructor(private appService: AppService, public modaladdService: ModalAddService, 
    public modalstock: ModalAddStockService){
      this.modalstock.stockUpdated$.subscribe(() => {
        // Actualizar la lista de productos automáticamente
        this.obtenerProductos();
      });
    }
  tipoNombres: UItipoNombres[] = [];
  //
  tipoNombress: {[key: number]:string}={
    1:'Polera',
    2:'Polera Manga Larga',
    3:'Polerón Canguro',
    4:'Polerón Polo'
  }
  nuevoProducto: any = {
    idprod: 0,
    tipo: '',
    color: '',
    talla: '',
    precio: 0,
    stock: 0,
    imagen: ''
  };
  @Output() productoSeleccionado = new EventEmitter<number>();
  ngOnInit(): void {
    this.appService.getAllproducts().subscribe(data => {
      this.product = data;
    });
    
    this.appService.getProdAll().subscribe(data => {
      this.prod = data;
    });

    // Dentro del método ngOnInit o donde tengas el arreglo prod correctamente poblado
    this.appService.getTipo().subscribe((data: Tipo[]) => {
      this.tipos = data;
    });

    this.modaladdService.agregarProducto$.subscribe(() => {
      // Actualizar la lista de productos automáticamente
      this.obtenerProductos();
    });

    this.obtenerProductos();
    // Suscribirse al evento de agregar producto
    this.modaladdService.agregarProducto$.subscribe(() => {
      // Actualizar la lista de productos automáticamente
      this.obtenerProductos();
    });

  }

  obtenerProductos(): void {
    this.appService.getProdAll().subscribe(data => {
      this.prod = data;
    });
  }

  //Abrir modal para el producto nuevo
  abrirModalAdd(){
    this.modaladdService.mostrarModalAdd();
  }
  //Abrir el modal para el aumentar el stock
  abrirModalStock(idprod: number){
    this.modalstock.mostrarModalAddStock();
    this.modalstock.setProductoSeleccionado(idprod);
    
  }

  

  agregarProd():void{
    this.appService.agregarProd(this.nuevoProducto).subscribe(
      (response)=>{
        console.log('Producto agregado correctamente')
      },
      (error)=>{
        console.log('Producto no agregado');
      }
    )
  }

  obtenerNombreTipo(idtipo: number): string {
    const tipoSeleccionado = this.tipos.find((tipo: Tipo) => tipo.idtipo === idtipo);
    return tipoSeleccionado ? tipoSeleccionado.nombre : 'Tipo no encontrado';
  }

  eliminarProducto(idprod: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.appService.eliminarProducto(idprod).subscribe(
        () => {
          console.log('Producto eliminado exitosamente');
          // Actualizar la lista de productos después de eliminar
          this.obtenerProductos();
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }
  

}
