import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { ModalAddStockService } from '../modal-add-stock.service';

@Component({
  selector: 'app-modal-add-stock',
  templateUrl: './modal-add-stock.component.html',
  styleUrls: ['./modal-add-stock.component.css']
})
export class ModalAddStockComponent {

  idProductoSeleccionado: number=0;
  nuevoProducto: any = {};
  nuevoStock: number = 0;
  formProduct: FormGroup;
  constructor(public modalstock: ModalAddStockService, 
              public appServise: AppService,
              public formBuilder: FormBuilder){
    this.formProduct = formBuilder.group({
      stock: ['',[Validators.required, Validators.min(0)]]
    })
  }

  ocultarModalAddStock(){
    this.modalstock.ocultarModalAddStock();
  }


  saveData(){
    console.log(this.formProduct.value);
  }
  
}
