import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ModalAddStockService } from '../modal-add-stock.service';

@Component({
  selector: 'app-modal-add-stock',
  templateUrl: './modal-add-stock.component.html',
  styleUrls: ['./modal-add-stock.component.css']
})
export class ModalAddStockComponent {

  idProductoSeleccionado: number = 0;
  nuevoProducto: any = {};
  constructor(public modalstock: ModalAddStockService, public appServise: AppService){
    
  }

  ocultarModalAddStock(){
    this.modalstock.ocultarModalAddStock();
  }


  
}
