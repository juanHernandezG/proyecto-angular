import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { ModalAddStockService } from '../modal-add-stock.service';

@Component({
  selector: 'app-modal-add-stock',
  templateUrl: './modal-add-stock.component.html',
  styleUrls: ['./modal-add-stock.component.css']
})
export class ModalAddStockComponent implements OnInit{

  idProductoSeleccionado: number=0;
  nuevoProducto: any = {};
  nuevoStock: number = 0;
  nuevoPrecio: number = 0;
  formProduct: FormGroup;
  constructor(public modalstock: ModalAddStockService, 
              public appService: AppService,
              public formBuilder: FormBuilder){
    this.formProduct = formBuilder.group({
      stock: ['',[Validators.required, Validators.min(0)]]
    })
  }

  ngOnInit() {
    // Suscribirse al observable para obtener el idprod seleccionado
    this.modalstock.getProductoSeleccionado().subscribe(idprod => {
      this.idProductoSeleccionado = idprod;
      // Aquí puedes realizar cualquier acción adicional que necesites cuando se seleccione un producto
    });
  }
  ocultarModalAddStock(){
    this.modalstock.ocultarModalAddStock();
  }

  setIdProductoSeleccionado(idprod: number) {
    this.idProductoSeleccionado = idprod; // Establecer el idprod seleccionado en la propiedad
  }

  getIdProductoSeleccionado(): number {
    return this.idProductoSeleccionado; // Obtener el idprod seleccionado
  }


  saveData() {
    console.log(this.formProduct.value);
    if (this.formProduct.valid) {
      const idProductoSeleccionado = this.idProductoSeleccionado;
      const nuevoStock = this.formProduct.value.stock;

      this.appService.actualizarStockk(idProductoSeleccionado, nuevoStock).subscribe(
        () => {
          console.log('Stock aumentado correctamente');
          this.modalstock.ocultarModalAddStock();
          this.modalstock.updateStock();
        },
        (error) => {
          console.error('Error al aumentar el stock', error);
        }
      );
    }
}


  
}
